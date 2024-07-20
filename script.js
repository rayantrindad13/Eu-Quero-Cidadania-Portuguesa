const carouselContainer = document.querySelector('.carousel-container');
let isDown = false;
let startX;
let scrollLeft;

carouselContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carouselContainer.offsetLeft;
    scrollLeft = carouselContainer.scrollLeft;
});

carouselContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

carouselContainer.addEventListener('mouseup', () => {
    isDown = false;
});

carouselContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselContainer.offsetLeft;
    const walk = (x - startX) * 3; // Multiplicador para aumentar a velocidade de arraste
    carouselContainer.scrollLeft = scrollLeft - walk;
});
