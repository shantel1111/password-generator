let passwordLength = 15;

function generateRandomCharacter() {
  let getIndex = Math.floor(Math.random() * characters.length);
  return characters[getIndex];
}

function generatePassword() {
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += generateRandomCharacter();
  }
  return randomPassword;
}

let buttonEl = document.getElementById("button-el")
let optionOne = document.getElementById("optionOne-el");

buttonEl.addEventListener("click", function passwordOptions() {
  optionOne.textContent = generatePassword();
})
