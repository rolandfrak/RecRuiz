let categoriaActual = 'software';
let isDragging = false;
let currentSeccionId = null;
let startPos = 0;


// === CONFIGURACIÓN DE CONTENIDO INDEPENDIENTE ===
const secciones = {
    software: [
        { 
        
        
            id: "soft-local", 
            subtitle: "SOFTWARE LOCAL", 
            currentIndex: 0, 
            items: [
                { title: "SISTEMA TUPA", img: "menu-tupa.jpg", tag: "LOCAL",desc: "Imagen perteneciente al menú de inicio del Sistema TUPA." },
                
                { title: "Recursos Institucionales", img: "GESTION DE RECURSOS TUPA.png", tag: "LOCAL", desc: "Formulario para la Gestión de Recursos Propios del IESTP JJFC en el Sistema Tupa"},
                
                { title: "Módulo de Ventas", img: "venta-Tupa.jpg", tag: "LOCAL", desc: "Formulario para el despacho de ventas del IESTP JJFC en el Sistema Tupa" },
                
                { title: "Gestión Clientes", img: "GESTION DE CLIENTES TUPA.png", tag: "LOCAL" },
                { title: "Boletería Recursos", img: "BOLETERIA DE RECURSOS TUPA.png", tag: "LOCAL" },
                { title: "Inicio De Sesión", img: "Error-Imagen.jpg", tag: "LOCAL"  , desc: "Formulario para el Inicio de sesión del Sistema Tupa"}
            ] 
        },
        
        
        
        
        { 
            id: "dev-web", 
            subtitle: "DESARROLLO WEB", 
            currentIndex: 0, 
            items: [
                { title: "Página de Inicio", img: "infor-ruiz-inicio.png", tag: "SITIO WEB",desc: "Página de inicio del sitio web Informática Ruiz.VER WEB:  https://rolandfrak.github.io/Mi-Primera-Web/index.html" },
                
                { title: "Página Nosotros", img: "infor-ruiz-nosotros.png", tag: "SITIO WEB", desc: "Página que contiene información sobre el propósito del sitio web y datos del desarrollador."},
                
                { title: "Página Colección", img:"infor-ruiz-coleccion.png", tag: "SITIO WEB", desc: "Colección, página que contiene temas educativos referente a la computación e informática." },
                
                { title: "Colección: Nube Informática", img:"infor-ruiz-nube.png", tag: "SITIO WEB", desc: "Muestra de tema informativo nube informática, dentro de la página colección."},
                
                { title: "Colección: Nube Informática", img:"infor-ruiz-redes.png", tag: "SITIO WEB", desc: "Muestra de tema informativo redes informáticas, dentro de la página colección."}
                
            ] 
        },
        { 
            id: "db-admin", 
            subtitle: "DATABASE", 
            currentIndex: 0, 
            items: [
                { title: "Admin SQL Server", img: "Error-Imagen.jpg", tag: "SQL" },
                { title: "Modelado de Datos", img: "Error-Imagen.jpg", tag: "SQL" }
            ] 
        }
    ],
    
    diseno: [
        { 
            id: "dj-chawis", 
            subtitle: "DJ CHAWIS", 
            currentIndex: 0, 
            items: [
                { title: "LOGO Dj Chawis", img: "Logo-Dj_Chawis.png", tag: "DJ MIX",desc: "Logo Principal de la marca Dj Chawis ••• ⟨⟨GEMINI⟩⟩" },
                { title: "Poster Noche Electro", img: "Electro-1.jpg", tag: "DJ MIX", desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp) con efecto neón ••• ⟨⟨COREL DRAW⟩⟩" },
                { title: "Poster Fiesta Nocturna", img: "Electro-2.jpg", tag: "DJ MIX", desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp) con efecto neón ••• ⟨⟨COREL DRAW⟩⟩"},
                { title: "Poster Versus Electro", img: "POSTER_vsElectro.png", tag: "DJ MIX", desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp) con efecto neón ••• ⟨⟨GEMINI⟩⟩"}
            ] 
        },
        
        { 
            id: "design-ruiz", 
            subtitle: "DESIGN RUIZ", 
            currentIndex: 0, 
            items: [
                { title: "LOGO DESIGN RUIZ", img: "LOGO-DESIGN.png", tag: "DESIGN" ,desc: "Logo Principal de la marca Design Ruiz••• ⟨⟨COREL DRAW⟩⟩" },
                
                { title: "POST Publicitario", img: "POSTER-1.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "POST Publicitario", img: "POSTER-2.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "POST Publicitario", img: "POSTER-3.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "POST Publicitario", img: "POSTER-4.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "BANNER Publicitario Halloween", img: "HALLOWEEN.png", tag: "DESIGN"  ,desc: "Banner creativo para redes sociales alusivo al festival Halloween ••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "BANNER Publicitario FIESTAS Patrias", img: "banner_fiestas_patrias.png", tag: "DESIGN"  ,desc: "Banner creativo para redes sociales alusivo a las Fiestas Patrias ••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "PORTADA Red Social Facebook", img: "PORTADA_DESIGN.png", tag: "DESIGN"  ,desc: "Portada para perfil para red social Facebook. ••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "PORTADA Red Social WhatsApp", img: "Portada_whasapp.png", tag: "DESIGN"  ,desc: "Portada para perfil para red social WhatsApp. ••• ⟨⟨CANVA⟩⟩"}
            ] 
        },
        
                { 
            id: "ciberhawk", 
            subtitle: "CIBER HAWK", 
            currentIndex: 0, 
            items: [
                { title: "Logo Civer Hawk", img: "Hawk-Logo.png", tag: "DESIGN"  ,desc: "Logo principal de la marca Ciber Hawk rubro Telecomunicaciones. ••• ⟨⟨INKASPE⟩⟩"},
                { title: "Flayer Informativo", img: "Hawk-Flayer.jpg", tag: "DESIGN"  ,desc: "Flayer Informativo sobre la marca••• ⟨⟨CANVA⟩⟩"},
                
                { title: "Banner", img: "Hawk-Banner-Anuncio.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
                
               { title: "Banner", img: "Hawk-Banner-Planes.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               
               { title: "Banner", img: "Hawk-Banner-Promo1.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               
               { title: "Banner", img: "Hawk-Banner-Promo2.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               { title: "Banner", img: "Hawk-Banner-Sorteo.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               
            ] 
        },
        
        { 
            id: "medical", 
            subtitle: "MEDICAL", 
            currentIndex: 0, 
            items: [
                { title: "Diseño Médico 1", img: "Error-Imagen.jpg", tag: "MEDICAL" },
                { title: "Diseño Médico 2", img: "Error-Imagen.jpg", tag: "MEDICAL" }
            ] 
        }
    ]
};

// ... (resto del código igual)

function buildAllCarousels() {
    const container = document.getElementById('dynamic-carousels-container');
    if (!container) return;
    container.innerHTML = '';
    
    // CORRECCIÓN AQUÍ: Cambiamos 'diseño' por 'diseno'
    // La 'ñ' causa problemas en las rutas de los archivos web.
    // Asegúrate de que tu carpeta física se llame 'diseno' (sin eñe).
    const folder = categoriaActual === 'software' ? 'portf' : 'dis';

    secciones[categoriaActual].forEach((seccion) => {
        const carouselGroup = document.createElement('div');
        carouselGroup.className = 'carousel-group';
        carouselGroup.style.marginBottom = "60px";

        carouselGroup.innerHTML = `
            <h2 class="text-title" style="margin-left: 5%;">${seccion.subtitle}</h2>
            <div class="tupa-carousel-container" id="container-${seccion.id}">
                <button class="nav-btn prev" onclick="moveSlider('${seccion.id}', -1)">❮</button>
                <div class="tupa-viewport">
                    <div class="tupa-track" id="track-${seccion.id}">
                        ${seccion.items.map(item => `
                            <div class="tupa-card" onmousedown="startSwipe(event, '${seccion.id}')" ontouchstart="startSwipe(event, '${seccion.id}')">
                                <div class="card-content">
                                    <div class="card-top"><img src="assets/imgs/${folder}/${item.img}" draggable="false"></div>
                                    <div class="card-bottom">
                                        <span class="tupa-tag">${item.tag}</span>
                                        <h3>${item.title}</h3>
                                        <button class="btn-open" onclick="irADetalle(
    '${item.title}',
    'assets/imgs/${folder}/${item.img}',
    '${item.desc}',
    '${item.tag}'
)">↗</button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <button class="nav-btn next" onclick="moveSlider('${seccion.id}', 1)">❯</button>
            </div>
        `;
        container.appendChild(carouselGroup);
        updateSlider(seccion.id);
    });
}

// === LÓGICA DE NAVEGACIÓN ===
function moveSlider(seccionId, direction) {
    const seccion = secciones[categoriaActual].find(s => s.id === seccionId);
    const cardsInView = window.innerWidth > 800 ? 2 : 1;
    const maxIndex = Math.max(0, seccion.items.length - cardsInView);
    seccion.currentIndex = Math.max(0, Math.min(seccion.currentIndex + direction, maxIndex));
    updateSlider(seccionId);
}

function updateSlider(seccionId) {
    const seccion = secciones[categoriaActual].find(s => s.id === seccionId);
    const track = document.getElementById(`track-${seccionId}`);
    const container = document.getElementById(`container-${seccionId}`);
    if (!track) return;

    const cardWidth = track.querySelector('.tupa-card').offsetWidth;
    track.style.transform = `translateX(-${seccion.currentIndex * cardWidth}px)`;
    
    const cardsInView = window.innerWidth > 800 ? 2 : 1;
    container.querySelector('.prev').classList.toggle('hidden', seccion.currentIndex <= 0);
    container.querySelector('.next').classList.toggle('hidden', seccion.currentIndex >= (seccion.items.length - cardsInView));
}

// === LÓGICA TÁCTIL / SWIPE ===
function startSwipe(event, id) {
    isDragging = true;
    currentSeccionId = id;
    startPos = getPositionX(event);
    const track = document.getElementById(`track-${id}`);
    track.style.transition = 'none';
}

function moveSwipe(event) {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startPos;
    const seccion = secciones[categoriaActual].find(s => s.id === currentSeccionId);
    const cardWidth = document.querySelector('.tupa-card').offsetWidth;
    const translate = (-seccion.currentIndex * cardWidth) + diff;
    document.getElementById(`track-${currentSeccionId}`).style.transform = `translateX(${translate}px)`;
}

function endSwipe() {
    if (!isDragging) return;
    isDragging = false;
    const track = document.getElementById(`track-${currentSeccionId}`);
    if (!track) return;
    track.style.transition = 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    
    const cardWidth = document.querySelector('.tupa-card').offsetWidth;
    const currentTransform = new WebKitCSSMatrix(window.getComputedStyle(track).transform).m41;
    const movedBy = currentTransform + (secciones[categoriaActual].find(s => s.id === currentSeccionId).currentIndex * cardWidth);

    if (movedBy < -50) moveSlider(currentSeccionId, 1);
    else if (movedBy > 50) moveSlider(currentSeccionId, -1);
    else updateSlider(currentSeccionId);
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// === EVENTOS GLOBALES ===
window.onmousemove = moveSwipe;
window.onmouseup = endSwipe;
window.ontouchmove = moveSwipe;
window.ontouchend = endSwipe;

function cargarCategoria(categoria, boton) {
    categoriaActual = categoria;
    document.querySelectorAll('.submenu-btn').forEach(btn => btn.classList.remove('active'));
    boton.classList.add('active');
    buildAllCarousels();
}

function irADetalle(titulo, imagen, desc, tipo){
    window.location.href =
`foto-info.html
?titulo=${encodeURIComponent(titulo)}
&img=${encodeURIComponent(imagen)}
&desc=${encodeURIComponent(desc)}
&tipo=${encodeURIComponent(tipo)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    categoriaActual = 'software';
    buildAllCarousels();
});


window.onresize = () => {
    if (secciones[categoriaActual]) {
        secciones[categoriaActual].forEach(s => updateSlider(s.id));
    }
};
            items: [
                { title: "Página de Inicio", img: "infor-ruiz-inicio.png", tag: "SITIO WEB",desc: "Página de inicio del sitio web Informática Ruiz.VER WEB:  https://rolandfrak.github.io/Mi-Primera-Web/index.html" },
                
                { title: "Página Nosotros", img: "infor-ruiz-nosotros.png", tag: "SITIO WEB", desc: "Página que contiene información sobre el propósito del sitio web y datos del desarrollador."},
                
                { title: "Página Colección", img:"infor-ruiz-coleccion.png", tag: "SITIO WEB", desc: "Colección, página que contiene temas educativos referente a la computación e informática." },
                
                { title: "Colección: Nube Informática", img:"infor-ruiz-nube.png", tag: "SITIO WEB", desc: "Muestra de tema informativo nube informática, dentro de la página colección."},
                
                { title: "Colección: Nube Informática", img:"infor-ruiz-redes.png", tag: "SITIO WEB", desc: "Muestra de tema informativo redes informáticas, dentro de la página colección."}
                
            ] 
        },
        { 
            id: "db-admin", 
            subtitle: "DATABASE", 
            currentIndex: 0, 
            items: [
                { title: "Admin SQL Server", img: "Error-Imagen.jpg", tag: "SQL" },
                { title: "Modelado de Datos", img: "Error-Imagen.jpg", tag: "SQL" }
            ] 
        }
    ],
    
    diseno: [
        { 
            id: "dj-chawis", 
            subtitle: "DJ CHAWIS", 
            currentIndex: 0, 
            items: [
                { title: "LOGO Dj Chawis", img: "Logo-Dj_Chawis.png", tag: "DJ MIX",desc: "Logo Principal de la marca Dj Chawis ••• ⟨⟨GEMINI⟩⟩" },
                { title: "Poster Noche Electro", img: "Electro-1.jpg", tag: "DJ MIX", desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp) con efecto neón ••• ⟨⟨COREL DRAW⟩⟩" },
                { title: "Poster Fiesta Nocturna", img: "Electro-2.jpg", tag: "DJ MIX", desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp) con efecto neón ••• ⟨⟨COREL DRAW⟩⟩"},
                { title: "Poster Versus Electro", img: "POSTER_vsElectro.png", tag: "DJ MIX", desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp) con efecto neón ••• ⟨⟨GEMINI⟩⟩"}
            ] 
        },
        
        { 
            id: "design-ruiz", 
            subtitle: "DESIGN RUIZ", 
            currentIndex: 0, 
            items: [
                { title: "LOGO DESIGN RUIZ", img: "LOGO-DESIGN.png", tag: "DESIGN" ,desc: "Logo Principal de la marca Design Ruiz••• ⟨⟨COREL DRAW⟩⟩" },
                
                { title: "POST Publicitario", img: "POSTER-1.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "POST Publicitario", img: "POSTER-2.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "POST Publicitario", img: "POSTER-3.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "POST Publicitario", img: "POSTER-4.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "BANNER Publicitario Halloween", img: "HALLOWEEN.png", tag: "DESIGN"  ,desc: "Banner creativo para redes sociales alusivo al festival Halloween ••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "BANNER Publicitario FIESTAS Patrias", img: "banner_fiestas_patrias.png", tag: "DESIGN"  ,desc: "Banner creativo para redes sociales alusivo a las Fiestas Patrias ••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "PORTADA Red Social Facebook", img: "PORTADA_DESIGN.png", tag: "DESIGN"  ,desc: "Portada para perfil para red social Facebook. ••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "PORTADA Red Social WhatsApp", img: "Portada_whasapp.png", tag: "DESIGN"  ,desc: "Portada para perfil para red social WhatsApp. ••• ⟨⟨CANVA⟩⟩"}
            ] 
        },
        
                { 
            id: "ciberhawk", 
            subtitle: "CIBER HAWK", 
            currentIndex: 0, 
            items: [
                { title: "Logo Civer Hawk", img: "Hawk-Logo.png", tag: "DESIGN"  ,desc: "Logo principal de la marca Ciber Hawk rubro Telecomunicaciones. ••• ⟨⟨INKASPE⟩⟩"},
                { title: "Flayer Informativo", img: "Hawk-Flayer.jpg", tag: "DESIGN"  ,desc: "Flayer Informativo sobre la marca••• ⟨⟨CANVA⟩⟩"},
                
                { title: "Banner", img: "Hawk-Banner-Anuncio.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
                
               { title: "Banner", img: "Hawk-Banner-Planes.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               
               { title: "Banner", img: "Hawk-Banner-Promo1.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               
               { title: "Banner", img: "Hawk-Banner-Promo2.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               { title: "Banner", img: "Hawk-Banner-Sorteo.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               
            ] 
        },
        
        { 
            id: "medical", 
            subtitle: "MEDICAL", 
            currentIndex: 0, 
            items: [
                { title: "Diseño Médico 1", img: "Error-Imagen.jpg", tag: "MEDICAL" },
                { title: "Diseño Médico 2", img: "Error-Imagen.jpg", tag: "MEDICAL" }
            ] 
        }
    ]
};

// ... (resto del código igual)

function buildAllCarousels() {
    const container = document.getElementById('dynamic-carousels-container');
    if (!container) return;
    container.innerHTML = '';
    
    // CORRECCIÓN AQUÍ: Cambiamos 'diseño' por 'diseno'
    // La 'ñ' causa problemas en las rutas de los archivos web.
    // Asegúrate de que tu carpeta física se llame 'diseno' (sin eñe).
    const folder = categoriaActual === 'software' ? 'portf' : 'dis';

    secciones[categoriaActual].forEach((seccion) => {
        const carouselGroup = document.createElement('div');
        carouselGroup.className = 'carousel-group';
        carouselGroup.style.marginBottom = "60px";

        carouselGroup.innerHTML = `
            <h2 class="text-title" style="margin-left: 5%;">${seccion.subtitle}</h2>
            <div class="tupa-carousel-container" id="container-${seccion.id}">
                <button class="nav-btn prev" onclick="moveSlider('${seccion.id}', -1)">❮</button>
                <div class="tupa-viewport">
                    <div class="tupa-track" id="track-${seccion.id}">
                        ${seccion.items.map(item => `
                            <div class="tupa-card" onmousedown="startSwipe(event, '${seccion.id}')" ontouchstart="startSwipe(event, '${seccion.id}')">
                                <div class="card-content">
                                    <div class="card-top"><img src="assets/imgs/${folder}/${item.img}" draggable="false"></div>
                                    <div class="card-bottom">
                                        <span class="tupa-tag">${item.tag}</span>
                                        <h3>${item.title}</h3>
                                        <button class="btn-open" onclick="irADetalle(
    '${item.title}',
    'assets/imgs/${folder}/${item.img}',
    '${item.desc}',
    '${item.tag}'
)">↗</button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <button class="nav-btn next" onclick="moveSlider('${seccion.id}', 1)">❯</button>
            </div>
        `;
        container.appendChild(carouselGroup);
        updateSlider(seccion.id);
    });
}

// === LÓGICA DE NAVEGACIÓN ===
function moveSlider(seccionId, direction) {
    const seccion = secciones[categoriaActual].find(s => s.id === seccionId);
    const cardsInView = window.innerWidth > 800 ? 2 : 1;
    const maxIndex = Math.max(0, seccion.items.length - cardsInView);
    seccion.currentIndex = Math.max(0, Math.min(seccion.currentIndex + direction, maxIndex));
    updateSlider(seccionId);
}

function updateSlider(seccionId) {
    const seccion = secciones[categoriaActual].find(s => s.id === seccionId);
    const track = document.getElementById(`track-${seccionId}`);
    const container = document.getElementById(`container-${seccionId}`);
    if (!track) return;

    const cardWidth = track.querySelector('.tupa-card').offsetWidth;
    track.style.transform = `translateX(-${seccion.currentIndex * cardWidth}px)`;
    
    const cardsInView = window.innerWidth > 800 ? 2 : 1;
    container.querySelector('.prev').classList.toggle('hidden', seccion.currentIndex <= 0);
    container.querySelector('.next').classList.toggle('hidden', seccion.currentIndex >= (seccion.items.length - cardsInView));
}

// === LÓGICA TÁCTIL / SWIPE ===
function startSwipe(event, id) {
    isDragging = true;
    currentSeccionId = id;
    startPos = getPositionX(event);
    const track = document.getElementById(`track-${id}`);
    track.style.transition = 'none';
}

function moveSwipe(event) {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startPos;
    const seccion = secciones[categoriaActual].find(s => s.id === currentSeccionId);
    const cardWidth = document.querySelector('.tupa-card').offsetWidth;
    const translate = (-seccion.currentIndex * cardWidth) + diff;
    document.getElementById(`track-${currentSeccionId}`).style.transform = `translateX(${translate}px)`;
}

function endSwipe() {
    if (!isDragging) return;
    isDragging = false;
    const track = document.getElementById(`track-${currentSeccionId}`);
    if (!track) return;
    track.style.transition = 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    
    const cardWidth = document.querySelector('.tupa-card').offsetWidth;
    const currentTransform = new WebKitCSSMatrix(window.getComputedStyle(track).transform).m41;
    const movedBy = currentTransform + (secciones[categoriaActual].find(s => s.id === currentSeccionId).currentIndex * cardWidth);

    if (movedBy < -50) moveSlider(currentSeccionId, 1);
    else if (movedBy > 50) moveSlider(currentSeccionId, -1);
    else updateSlider(currentSeccionId);
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// === EVENTOS GLOBALES ===
window.onmousemove = moveSwipe;
window.onmouseup = endSwipe;
window.ontouchmove = moveSwipe;
window.ontouchend = endSwipe;

function cargarCategoria(categoria, boton) {
    categoriaActual = categoria;
    document.querySelectorAll('.submenu-btn').forEach(btn => btn.classList.remove('active'));
    boton.classList.add('active');
    buildAllCarousels();
}

function irADetalle(titulo, imagen, desc, tipo){
    window.location.href =
`foto-info.html
?titulo=${encodeURIComponent(titulo)}
&img=${encodeURIComponent(imagen)}
&desc=${encodeURIComponent(desc)}
&tipo=${encodeURIComponent(tipo)}`;
}

window.onload = buildAllCarousels; me 
window.onresize = () => {
    if (secciones[categoriaActual]) {
        secciones[categoriaActual].forEach(s => updateSlider(s.id));
    }
};
            ] 
        }
    ],
    
    diseno: [
        { 
            id: "dj-chawis", 
            subtitle: "DJ CHAWIS", 
            currentIndex: 0, 
            items: [
                { title: "LOGO Dj Chawis", img: "Logo-Dj_Chawis.png", tag: "DJ MIX",desc: "Logo Principal de la marca Dj Chawis ••• ⟨⟨GEMINI⟩⟩" },
                { title: "Poster Noche Electro", img: "Electro-1.jpg", tag: "DJ MIX", desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp) con efecto neón ••• ⟨⟨COREL DRAW⟩⟩" },
                { title: "Poster Fiesta Nocturna", img: "Electro-2.jpg", tag: "DJ MIX", desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp) con efecto neón ••• ⟨⟨COREL DRAW⟩⟩"},
                { title: "Poster Versus Electro", img: "POSTER_vsElectro.png", tag: "DJ MIX", desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp) con efecto neón ••• ⟨⟨GEMINI⟩⟩"}
            ] 
        },
        
        { 
            id: "design-ruiz", 
            subtitle: "DESIGN RUIZ", 
            currentIndex: 0, 
            items: [
                { title: "LOGO DESIGN RUIZ", img: "LOGO-DESIGN.png", tag: "DESIGN" ,desc: "Logo Principal de la marca Design Ruiz••• ⟨⟨COREL DRAW⟩⟩" },
                
                { title: "POST Publicitario", img: "POSTER-1.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "POST Publicitario", img: "POSTER-2.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "POST Publicitario", img: "POSTER-3.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "POST Publicitario", img: "POSTER-4.png", tag: "DESIGN"  ,desc: "Poster Publicitario para redes sociales (Facebook, Instagram, WhatsApp)••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "BANNER Publicitario Halloween", img: "HALLOWEEN.png", tag: "DESIGN"  ,desc: "Banner creativo para redes sociales alusivo al festival Halloween ••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "BANNER Publicitario FIESTAS Patrias", img: "banner_fiestas_patrias.png", tag: "DESIGN"  ,desc: "Banner creativo para redes sociales alusivo a las Fiestas Patrias ••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "PORTADA Red Social Facebook", img: "PORTADA_DESIGN.png", tag: "DESIGN"  ,desc: "Portada para perfil para red social Facebook. ••• ⟨⟨COREL DRAW⟩⟩"},
                
                { title: "PORTADA Red Social WhatsApp", img: "Portada_whasapp.png", tag: "DESIGN"  ,desc: "Portada para perfil para red social WhatsApp. ••• ⟨⟨CANVA⟩⟩"}
            ] 
        },
        
                { 
            id: "ciberhawk", 
            subtitle: "CIBER HAWK", 
            currentIndex: 0, 
            items: [
                { title: "Logo Civer Hawk", img: "Hawk-Logo.png", tag: "DESIGN"  ,desc: "Logo principal de la marca Ciber Hawk rubro Telecomunicaciones. ••• ⟨⟨INKASPE⟩⟩"},
                { title: "Flayer Informativo", img: "Hawk-Flayer.jpg", tag: "DESIGN"  ,desc: "Flayer Informativo sobre la marca••• ⟨⟨CANVA⟩⟩"},
                
                { title: "Banner", img: "Hawk-Banner-Anuncio.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
                
               { title: "Banner", img: "Hawk-Banner-Planes.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               
               { title: "Banner", img: "Hawk-Banner-Promo1.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               
               { title: "Banner", img: "Hawk-Banner-Promo2.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               { title: "Banner", img: "Hawk-Banner-Sorteo.jpg", tag: "DESIGN"  ,desc: "Banner publicitario para redes sociales. ••• ⟨⟨INKASPE⟩⟩"},
               
            ] 
        },
        
        { 
            id: "medical", 
            subtitle: "MEDICAL", 
            currentIndex: 0, 
            items: [
                { title: "Diseño Médico 1", img: "Error-Imagen.jpg", tag: "MEDICAL" },
                { title: "Diseño Médico 2", img: "Error-Imagen.jpg", tag: "MEDICAL" }
            ] 
        }
    ]
};

// ... (resto del código igual)

function buildAllCarousels() {
    const container = document.getElementById('dynamic-carousels-container');
    if (!container) return;
    container.innerHTML = '';
    
    // CORRECCIÓN AQUÍ: Cambiamos 'diseño' por 'diseno'
    // La 'ñ' causa problemas en las rutas de los archivos web.
    // Asegúrate de que tu carpeta física se llame 'diseno' (sin eñe).
    const folder = categoriaActual === 'software' ? 'portf' : 'dis';

    secciones[categoriaActual].forEach((seccion) => {
        const carouselGroup = document.createElement('div');
        carouselGroup.className = 'carousel-group';
        carouselGroup.style.marginBottom = "60px";

        carouselGroup.innerHTML = `
            <h2 class="text-title" style="margin-left: 5%;">${seccion.subtitle}</h2>
            <div class="tupa-carousel-container" id="container-${seccion.id}">
                <button class="nav-btn prev" onclick="moveSlider('${seccion.id}', -1)">❮</button>
                <div class="tupa-viewport">
                    <div class="tupa-track" id="track-${seccion.id}">
                        ${seccion.items.map(item => `
                            <div class="tupa-card" onmousedown="startSwipe(event, '${seccion.id}')" ontouchstart="startSwipe(event, '${seccion.id}')">
                                <div class="card-content">
                                    <div class="card-top"><img src="assets/imgs/${folder}/${item.img}" draggable="false"></div>
                                    <div class="card-bottom">
                                        <span class="tupa-tag">${item.tag}</span>
                                        <h3>${item.title}</h3>
                                        <button class="btn-open" onclick="irADetalle(
    '${item.title}',
    'assets/imgs/${folder}/${item.img}',
    '${item.desc}',
    '${item.tag}'
)">↗</button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <button class="nav-btn next" onclick="moveSlider('${seccion.id}', 1)">❯</button>
            </div>
        `;
        container.appendChild(carouselGroup);
        updateSlider(seccion.id);
    });
}

// === LÓGICA DE NAVEGACIÓN ===
function moveSlider(seccionId, direction) {
    const seccion = secciones[categoriaActual].find(s => s.id === seccionId);
    const cardsInView = window.innerWidth > 800 ? 2 : 1;
    const maxIndex = Math.max(0, seccion.items.length - cardsInView);
    seccion.currentIndex = Math.max(0, Math.min(seccion.currentIndex + direction, maxIndex));
    updateSlider(seccionId);
}

function updateSlider(seccionId) {
    const seccion = secciones[categoriaActual].find(s => s.id === seccionId);
    const track = document.getElementById(`track-${seccionId}`);
    const container = document.getElementById(`container-${seccionId}`);
    if (!track) return;

    const cardWidth = track.querySelector('.tupa-card').offsetWidth;
    track.style.transform = `translateX(-${seccion.currentIndex * cardWidth}px)`;
    
    const cardsInView = window.innerWidth > 800 ? 2 : 1;
    container.querySelector('.prev').classList.toggle('hidden', seccion.currentIndex <= 0);
    container.querySelector('.next').classList.toggle('hidden', seccion.currentIndex >= (seccion.items.length - cardsInView));
}

// === LÓGICA TÁCTIL / SWIPE ===
function startSwipe(event, id) {
    isDragging = true;
    currentSeccionId = id;
    startPos = getPositionX(event);
    const track = document.getElementById(`track-${id}`);
    track.style.transition = 'none';
}

function moveSwipe(event) {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startPos;
    const seccion = secciones[categoriaActual].find(s => s.id === currentSeccionId);
    const cardWidth = document.querySelector('.tupa-card').offsetWidth;
    const translate = (-seccion.currentIndex * cardWidth) + diff;
    document.getElementById(`track-${currentSeccionId}`).style.transform = `translateX(${translate}px)`;
}

function endSwipe() {
    if (!isDragging) return;
    isDragging = false;
    const track = document.getElementById(`track-${currentSeccionId}`);
    if (!track) return;
    track.style.transition = 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    
    const cardWidth = document.querySelector('.tupa-card').offsetWidth;
    const currentTransform = new WebKitCSSMatrix(window.getComputedStyle(track).transform).m41;
    const movedBy = currentTransform + (secciones[categoriaActual].find(s => s.id === currentSeccionId).currentIndex * cardWidth);

    if (movedBy < -50) moveSlider(currentSeccionId, 1);
    else if (movedBy > 50) moveSlider(currentSeccionId, -1);
    else updateSlider(currentSeccionId);
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// === EVENTOS GLOBALES ===
window.onmousemove = moveSwipe;
window.onmouseup = endSwipe;
window.ontouchmove = moveSwipe;
window.ontouchend = endSwipe;

function cargarCategoria(categoria, boton) {
    categoriaActual = categoria;
    document.querySelectorAll('.submenu-btn').forEach(btn => btn.classList.remove('active'));
    boton.classList.add('active');
    buildAllCarousels();
}

function irADetalle(titulo, imagen, desc, tipo){
    window.location.href =
`foto-info.html
?titulo=${encodeURIComponent(titulo)}
&img=${encodeURIComponent(imagen)}
&desc=${encodeURIComponent(desc)}
&tipo=${encodeURIComponent(tipo)}`;
}

window.onload = buildAllCarousels; me 
window.onresize = () => {
    if (secciones[categoriaActual]) {
        secciones[categoriaActual].forEach(s => updateSlider(s.id));
    }
};
