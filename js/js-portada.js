const navbar = document.querySelector(".navbar");
const topNavbar = navbar.offsetTop;

window.addEventListener("scroll", () => {
    if (window.scrollY >= topNavbar) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
    // Recalcula la posición del menú desplegable si está abierto mientras se hace scroll
    ajustarPosicionMenuMovil();
});

const hamburger = document.getElementById("hamburger");
const menuLeft = document.querySelector(".menu-left");
const menuRight = document.querySelector(".menu-right");

hamburger.addEventListener("click", () => {
    menuLeft.classList.toggle("active");
    menuRight.classList.toggle("active");
    ajustarPosicionMenuMovil();
});

// Función clave para corregir el desajuste de posición en móviles
function ajustarPosicionMenuMovil() {
    if (window.innerWidth <= 992) {
        if (navbar.classList.contains("fixed")) {
            // Si la barra está fija arriba de la pantalla
            menuLeft.style.position = "fixed";
            menuLeft.style.top = "90px";
            menuRight.style.position = "fixed";
            menuRight.style.top = "255px"; // ¡Corregido! Empieza exactamente donde termina 'Resumen'
        } else {
            // Si la barra está en su posición original debajo de la portada
            menuLeft.style.position = "absolute";
            menuLeft.style.top = "90px";
            menuRight.style.position = "absolute";
            menuRight.style.top = "255px"; // ¡Corregido! Se elimina el hueco transparente
        }
    } else {
        // Resetea estilos si se agranda la pantalla a PC
        menuLeft.style.position = "";
        menuLeft.style.top = "";
        menuRight.style.position = "";
        menuRight.style.top = "";
    }
}

// Cerrar el menú al hacer clic en un enlace (Mejora UX)
const menuLinks = document.querySelectorAll(".navbar a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuLeft.classList.remove("active");
        menuRight.classList.remove("active");
    });
});




/* -----------------SECCION INFO PERSONAL------------------- */

document.addEventListener('DOMContentLoaded', () => {
  const copyEmailButton = document.getElementById('js-copy-email');
  
  if (copyEmailButton) {
    copyEmailButton.addEventListener('click', () => {
      const emailText = copyEmailButton.querySelector('.email-text').textContent;
      
      // Ejecuta la copia al portapapeles usando la API nativa del navegador
      navigator.clipboard.writeText(emailText).then(() => {
        const label = copyEmailButton.querySelector('.info-label');
        const originalLabelHTML = label.innerHTML;
        
        // Efecto visual instantáneo de éxito
        copyEmailButton.classList.add('copied');
        label.innerHTML = '¡Copiado al portapapeles! ✨';
        
        // Restaura la celda a su estado original tras 2 segundos
        setTimeout(() => {
          copyEmailButton.classList.remove('copied');
          label.innerHTML = originalLabelHTML;
        }, 2000);
      }).catch(err => {
        console.error('No se pudo copiar de manera automática: ', err);
      });
    });
  }
});



/* SECCION FORMACION TECNICA */
document.addEventListener("DOMContentLoaded", () => {
    const skillFills = document.querySelectorAll(".skill-fill");

    // Configuración del observador de pantalla
    const observerOptions = {
        root: null, // Usa el viewport del navegador
        threshold: 0.15 // Se activa cuando el 15% de la tarjeta es visible
    };

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento entra en pantalla
            if (entry.isIntersecting) {
                const bar = entry.target;
                // Obtiene el porcentaje asignado en el HTML del atributo 'data-width'
                const targetWidth = bar.getAttribute("data-width");
                
                // Aplica el ancho con animación fluida
                bar.style.width = targetWidth;
                
                // Deja de observar la barra una vez animada para mejorar el rendimiento
                observer.unobserve(bar);
            }
        });
    };

    const observer = new IntersectionObserver(animateSkills, observerOptions);

    // Registra cada una de las barras de habilidades e idiomas en el observador
    skillFills.forEach(fill => observer.observe(fill));
});




/* Contacto */

document.addEventListener("DOMContentLoaded", () => {
  const emailBtn = document.getElementById("js-contact-email-btn");
  const emailTextBtn = document.getElementById("js-email-btn-text");
  const originalEmail = "rolandfrak0808@gmail.com"; // Tu correo directo

  if (emailBtn) {
    emailBtn.addEventListener("click", () => {
      // Copiar la cadena al portapapeles de manera nativa
      navigator.clipboard.writeText(originalEmail).then(() => {
        // Cambiar estados visuales
        emailBtn.classList.add("success");
        emailTextBtn.textContent = "¡Copiado con éxito! ✨";

        // Revertir a la normalidad tras 2.5 segundos
        setTimeout(() => {
          emailBtn.classList.remove("success");
          emailTextBtn.textContent = "Copiar Correo";
        }, 2500);
      }).catch(err => {
        console.error("Error al copiar correo de forma automatizada: ", err);
      });
    });
  }
});


/* Servicios */

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("services-track");
  const cards = Array.from(track.children);
  const dots = document.querySelectorAll(".dot");
  
  // Condición inicial: Si está en PC, no ejecutar la lógica del carrusel
  if (window.innerWidth >= 992) return;

  let currentIndex = 1; // Empezamos en 1 debido al clon inicial
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let autoplayTimer = null;

  const cardWidth = cards[0].offsetWidth;
  // El offset centra perfectamente la tarjeta activa en pantallas móviles
  const centerOffset = (window.innerWidth - cardWidth) / 2;

  // Posicionamiento inicial exacto en la tarjeta 1
  setSliderPositionByIndex();

  // Inicializar Autoplay de 10 segundos
  startAutoplay();

  // EVENTOS TÁCTILES Y MOUSE (Para pruebas en navegador)
  cards.forEach((card) => {
    const cardInner = card.querySelector('.service-card-inner');
    
    // Touch Events
    cardInner.addEventListener("touchstart", dragStart);
    cardInner.addEventListener("touchend", dragEnd);
    cardInner.addEventListener("touchmove", dragMove);

    // Mouse Events
    cardInner.addEventListener("mousedown", dragStart);
    cardInner.addEventListener("mouseup", dragEnd);
    cardInner.addEventListener("mouseleave", dragEnd);
    cardInner.addEventListener("mousemove", dragMove);
  });

  function dragStart(e) {
    isDragging = true;
    startX = getPositionX(e);
    clearInterval(autoplayTimer); // Pausa el tiempo al tocar
    track.style.transition = "none";
    animationID = requestAnimationFrame(animation);
  }

  function dragMove(e) {
    if (!isDragging) return;
    const currentX = getPositionX(e);
    const diff = currentX - startX;
    currentTranslate = prevTranslate + diff;
  }

  function dragEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;

    // Umbral de 50px para pasar a la siguiente tarjeta
    if (movedBy < -50) currentIndex += 1;
    if (movedBy > 50) currentIndex -= 1;

    updateSlider();
    startAutoplay(); // Reinicia los 10 segundos limpios
  }

  function getPositionX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  }

  function animation() {
    track.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) requestAnimationFrame(animation);
  }

  function setSliderPositionByIndex() {
    currentTranslate = -currentIndex * cardWidth + centerOffset;
    prevTranslate = currentTranslate;
    track.style.transform = `translateX(${currentTranslate}px)`;
    updateActiveClasses();
  }

  function updateSlider() {
    track.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
    setSliderPositionByIndex();

    // Comprobación de límites infinitos (Salto imperceptible)
    track.addEventListener("transitionend", function loopReset() {
      if (currentIndex === cards.length - 1) {
        track.style.transition = "none";
        currentIndex = 1;
        setSliderPositionByIndex();
      }
      if (currentIndex === 0) {
        track.style.transition = "none";
        currentIndex = cards.length - 2;
        setSliderPositionByIndex();
      }
      track.removeEventListener("transitionend", loopReset);
    });
  }

  function updateActiveClasses() {
    cards.forEach((card, idx) => {
      if (idx === currentIndex) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });

    // Mapeo de indicadores de puntos bajo pantalla
    let dotIndex = currentIndex - 1;
    if (currentIndex === cards.length - 1) dotIndex = 0;
    if (currentIndex === 0) dotIndex = dots.length - 1;

    dots.forEach((dot, idx) => {
      if (idx === dotIndex) dot.classList.add("active");
      else dot.classList.remove("active");
    });
  }

  function startAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
      currentIndex += 1;
      updateSlider();
    }, 5000); // 5 segundos exactos solicitados
  }

  // Recalcular posiciones si el dispositivo gira la pantalla
  window.addEventListener('resize', () => {
    if (window.innerWidth < 992) {
      setSliderPositionByIndex();
    }
  });
});