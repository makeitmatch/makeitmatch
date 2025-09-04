const galleria = document.querySelector('.galleria');

let autoScroll = setInterval(() => {
    galleria.scrollLeft += 2; // velocità (px per step)

    // Se arriva alla fine, ricomincia dall'inizio
    if (galleria.scrollLeft + galleria.clientWidth >= galleria.scrollWidth) {
        galleria.scrollLeft = 0;
    }
}, 20); // intervallo in ms

// Se l'utente interagisce (scroll manuale), fermiamo l'autoscroll
galleria.addEventListener('mouseenter', () => clearInterval(autoScroll));
galleria.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
        galleria.scrollLeft += 2;
        if (galleria.scrollLeft + galleria.clientWidth >= galleria.scrollWidth) {
            galleria.scrollLeft = 0;
        }
    }, 20);
});
