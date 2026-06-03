document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 1. LÓGICA DE LA BARRA DE NAVEGACIÓN Y HAMBURGUESA (CORREGIDA)
    // ==========================================================================
    const navbar = document.querySelector(".navbar");
    const hamburger = document.getElementById("hamburger");
    const menuLeft = document.querySelector(".menu-left");
    const menuRight = document.querySelector(".menu-right");

    if (navbar && hamburger && menuLeft && menuRight) {
        
        // Medimos la altura del hero en tiempo real para evitar fallos de offset en celulares
        const obtenerPuntoFijo = () => {
            const hero = document.querySelector(".hero");
            return hero ? hero.offsetHeight : 100;
        };

        window.addEventListener("scroll", () => {
            if (window.scrollY >= obtenerPuntoFijo()) {
                navbar.classList.add("fixed");
            } else {
                navbar.classList.remove("fixed");
            }
            ajustarPosicionMenuMovil();
        });

        // Evento Click de la Hamburguesa
        hamburger.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            menuLeft.classList.toggle("active");
            menuRight.classList.toggle("active");
            ajustarPosicionMenuMovil();
        });

        // Función para alinear los menús uno debajo de otro en móvil
        function ajustarPosicionMenuMovil() {
            if (window.innerWidth <= 992) {
                if (navbar.classList.contains("fixed")) {
                    menuLeft.style.position = "fixed";
                    menuLeft.style.top = "90px";
                    menuRight.style.position = "fixed";
                    menuRight.style.top = "255px";
                } else {
                    menuLeft.style.position = "absolute";
                    menuLeft.style.top = "90px";
                    menuRight.style.position = "absolute";
                    menuRight.style.top = "255px";
                }
            } else {
                menuLeft.style.position = "";
                menuLeft.style.top = "";
                menuRight.style.position = "";
                menuRight.style.top = "";
            }
        }

        // Cerrar el menú al presionar cualquier enlace
        const menuLinks = document.querySelectorAll(".navbar a");
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuLeft.classList.remove("active");
                menuRight.classList.remove("active");
            });
        });

        ajustarPosicionMenuMovil();
    }

    // ==========================================================================
    // 2. SECCIÓN INFO PERSONAL (COPIAR CORREO)
    // ==========================================================================
    const copyEmailButton = document.getElementById('js-copy-email');
    if (copyEmailButton) {
        copyEmailButton.addEventListener('click', () => {
            const emailText = copyEmailButton.querySelector('.email-text').textContent;
            navigator.clipboard.writeText(emailText).then(() => {
                const label = copyEmailButton.querySelector('.info-label');
                const originalLabelHTML = label.innerHTML;
                copyEmailButton.classList.add('copied');
                label.innerHTML = '¡Copiado al portapapeles! ✨';
                setTimeout(() => {
                    copyEmailButton.classList.remove('copied');
                    label.innerHTML = originalLabelHTML;
                }, 2000);
            }).catch(err => {
                console.error('No se pudo copiar de manera automática: ', err);
            });
        });
    }

    // ==========================================================================
    // 3. SECCIÓN FORMACIÓN TÉCNICA (ANIMACIÓN DE BARRAS)
    // ==========================================================================
    const skillFills = document.querySelectorAll(".skill-fill");
    const observerOptions = {
        root: null,
        threshold: 0.15
    };

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute("data-width");
                bar.style.width = targetWidth;
                observer.unobserve(bar);
            }
        });
    };

    const observer = new IntersectionObserver(animateSkills, observerOptions);
    skillFills.forEach(fill => observer.observe(fill));

    // ==========================================================================
    // 4. SECCIÓN CONTACTO (BOTÓN COPIAR CORREO)
    // ==========================================================================
    const emailBtn = document.getElementById("js-contact-email-btn");
    const emailTextBtn = document.getElementById("js-email-btn-text");
    const originalEmail = "rolandfrak0808@gmail.com";

    if (emailBtn) {
        emailBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(originalEmail).then(() => {
                emailBtn.classList.add("success");
                emailTextBtn.textContent = "¡Copiado con éxito! ✨";
                setTimeout(() => {
                    emailBtn.classList.remove("success");
                    emailTextBtn.textContent = "Copiar Correo";
                }, 2500);
            }).catch(err => {
                console.error("Error al copiar correo de forma automatizada: ", err);
            });
        });
    }

    // ==========================================================================
    // 5. SECCIÓN SERVICIOS (CARRUSEL MÓVIL ASOMADO A LA DERECHA)
    // ==========================================================================
    const track = document.getElementById("services-track");
    if (track && window.innerWidth < 992) {
        const cards = Array.from(track.children);
        const dots = document.querySelectorAll(".dot");
        
        let currentIndex = 1; 
        let isDragging = false;
        let startX = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID = 0;
        let autoplayTimer = null;

        const cardWidth = cards[0].offsetWidth;
        
        // MODIFICACIÓN AQUÍ: Restamos 50px para desplazar el inicio y que se vea del medio a la derecha
        const centerOffset = ((window.innerWidth - cardWidth) / 2) - 50;

        setSliderPositionByIndex();
        startAutoplay();

        cards.forEach((card) => {
            const cardInner = card.querySelector('.service-card-inner');
            if (cardInner) {
                cardInner.addEventListener("touchstart", dragStart);
                cardInner.addEventListener("touchend", dragEnd);
                cardInner.addEventListener("touchmove", dragMove);
                cardInner.addEventListener("mousedown", dragStart);
                cardInner.addEventListener("mouseup", dragEnd);
                cardInner.addEventListener("mouseleave", dragEnd);
                cardInner.addEventListener("mousemove", dragMove);
            }
        });

        function dragStart(e) {
            isDragging = true;
            startX = getPositionX(e);
            clearInterval(autoplayTimer);
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

            if (movedBy < -50) currentIndex += 1;
            if (movedBy > 50) currentIndex -= 1;

            updateSlider();
            startAutoplay();
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
            }, 5000);
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 992) {
                setSliderPositionByIndex();
            }
        });
    }
});