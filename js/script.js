/* Menu responsivo */

function menuShow() {
    const menuMobile = document.querySelector('.mobile-itens-header');
    const closeButton = document.querySelector('.close-btn');
    const menuIcon = document.querySelector('.mobile-menu-icon .fa-bars');

    // Verifica se o menu está aberto
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open'); // Remove a classe 'open'
        closeButton.style.display = 'none'; // Esconde o botão de fechar
        menuIcon.style.display = 'inline'; // Mostra o ícone de barras
    } else {
        menuMobile.classList.add('open'); // Adiciona a classe 'open'
        closeButton.style.display = 'inline'; // Mostra o botão de fechar
        menuIcon.style.display = 'none'; // Esconde o ícone de barras
    }
}

// Fecha o menu ao clicar em um item
const menuItems = document.querySelectorAll('.mobile-itens-header li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuShow(); // Fecha o menu
    });
});

// Fecha o menu ao clicar no botão de fechar
const closeButton = document.querySelector('.close-btn');

closeButton.addEventListener('click', () => {
    menuShow(); // Fecha o menu
});


// Fundo animado //

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles-js config loaded');
  });

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#e6193b"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":160,"color":"#e6193b","opacity":0.736,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":948.0055421862472,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

if (window.innerWidth < 768) { // Para dispositivos com largura menor que 768px
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 40, // Menor número para mobile
                "density": { "enable": true, "value_area": 800 }
            },
            // Configurações restantes...
        }
    });
} else {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80, // Valor padrão para desktop
                "density": { "enable": true, "value_area": 800 }
            },
            // Configurações restantes...
        }
    });
}

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

