const nameOutput=document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");
nameInput.addEventListener('input', (event) => {
    const inputValue = event.target.value.trim();
    nameOutput.textContent = inputValue?inputValue:'Anonymous';
  });