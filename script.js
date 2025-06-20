const greetButton = document.getElementById('greet-btn');
const resizeButton = document.getElementById('resize-btn');
const header = document.querySelector('header');
const imageContainer = document.getElementById('image-container');

let image = null;
let isLarge = false;

greetButton.addEventListener('click', () => {
  header.style.backgroundColor = 'white';
  header.style.color = '#333';

  if (!image) {
    image = document.createElement('img');
    image.src = 'https://github.com/StarzhytskyiDaniil/project-CV/blob/main/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png?raw=true'; 
    image.alt = 'Placeholder Image';
    imageContainer.appendChild(image);
    resizeButton.style.display = 'inline-block';
  }

  imageContainer.style.display = 'block';
});

resizeButton.addEventListener('click', () => {
  if (image) {
    if (isLarge) {
      image.style.transform = 'scale(1)';
    } else {
      image.style.transform = 'scale(1.5)';
    }
    isLarge = !isLarge;
  }
});