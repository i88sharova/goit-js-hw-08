function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }
  for (let i = 0; i < amount; i+=1) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxContainer.appendChild(box);
  }
 input.value = '';
});
destroyButton.addEventListener('click', () => {
  boxContainer.innerHTML = '';
});
