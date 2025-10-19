const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink'];

const button = document.getElementById('colorButton');
const heading = document.getElementById('heading');

button.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heading.style.color = randomColor;
});