function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
    
  boxesContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  let size = 30;
  for(let i = 0; i < amount; i++){
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
    
  }
  boxesContainer.appendChild(fragment);
}
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
  createBtn.addEventListener('click', () => {
    const value = parseInt(input.value);
    if (value>=1 && value<=100){
        createBoxes(value);
        input.value='';
    } else {
      concol.log('Please enter a number between 1 and 100');
  }
});
destroyBtn.addEventListener('click', destroyBoxes);