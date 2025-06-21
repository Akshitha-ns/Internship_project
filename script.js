// Array of image URLs
const images = [
'https://cdn.shopify.com/s/files/1/0070/7032/files/dalai-lama-quote.png?v=1706740038',
'https://media.istockphoto.com/id/1758363728/photo/motivational-and-inspirational-wording.jpg?s=612x612&w=0&k=20&c=hO3CU65aNSSMhof_fySmUHXHeJ_EcBI0WPSDZRLNKP0=',
'https://www.superprof.co.in/blog/wp-content/uploads/2024/03/success-english-quote-superprof-1.png',
'https://media.istockphoto.com/id/1392896428/photo/inspirational-quote.jpg?s=612x612&w=0&k=20&c=CbqPLlx65768zd6QQpJqo55MZIAhA_o68cS0nLIfjw0=',
'https://media.istockphoto.com/id/1350976616/photo/person-holding-yellow-cup-of-tea-or-coffee-in-hand-against-mountain-view-with-a-morning.jpg?s=612x612&w=0&k=20&c=FB860wXxV_ULplG9Qt2d4lMj2wcKtDGXzLDZ-n2WT1Y='
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');
const indicatorContainer = document.getElementById('indicator');

// Load initial image
window.onload = () => {
  showImage(currentIndex);
  createIndicators();
  setActiveIndicator(currentIndex);
};

// Display image
function showImage(index) {
  sliderImage.style.opacity = 0;
  setTimeout(() => {
    sliderImage.src = images[index];
    sliderImage.style.opacity = 1;
  }, 200);
  setActiveIndicator(index);
}

// Navigation buttons
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Automatic slideshow
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 3000);

// Create indicators
function createIndicators() {
  images.forEach((_, index) => {
    const dot = document.createElement('span');
    if (index === currentIndex) dot.classList.add('active');
    indicatorContainer.appendChild(dot);
  });
}

// Update active indicator
function setActiveIndicator(index) {
  const dots = indicatorContainer.querySelectorAll('span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}
