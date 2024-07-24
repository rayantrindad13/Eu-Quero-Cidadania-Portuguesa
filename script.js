const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let scrollAmount = 0;

prevButton.addEventListener('click', () => {
    const scrollWidth = carouselContainer.scrollWidth;
    const containerWidth = carouselContainer.clientWidth;
    scrollAmount -= containerWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    carouselContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

nextButton.addEventListener('click', () => {
    const scrollWidth = carouselContainer.scrollWidth;
    const containerWidth = carouselContainer.clientWidth;
    scrollAmount += containerWidth;
    if (scrollAmount > scrollWidth - containerWidth) {
        scrollAmount = scrollWidth - containerWidth;
    }
    carouselContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

let isDown = false;
let startX;
let scrollLeft;

carouselContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    carouselContainer.classList.add('active');
    startX = e.pageX - carouselContainer.offsetLeft;
    scrollLeft = carouselContainer.scrollLeft;
});

carouselContainer.addEventListener('mouseleave', () => {
    isDown = false;
    carouselContainer.classList.remove('active');
});

carouselContainer.addEventListener('mouseup', () => {
    isDown = false;
    carouselContainer.classList.remove('active');
});

carouselContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselContainer.offsetLeft;
    const walk = (x - startX) * 3; // Multiplicador para aumentar a velocidade de arraste
    carouselContainer.scrollLeft = scrollLeft - walk;
});
