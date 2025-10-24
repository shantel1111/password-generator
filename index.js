let customCharacters = [];
const uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const loadEl = document.getElementById("load-el");
const copyEl = document.getElementById("copy-el");
const tooltip = document.getElementById("tooltip");
const optionEl = document.getElementById("option-el");
const passwordLength = document.getElementById("password-length");
const rangeInput = document.getElementById("range-input");
let currentValue = rangeInput.value;

document.addEventListener("DOMContentLoaded", () => {
  optionEl.textContent = generatePassword();
});

loadEl.addEventListener("click", passwordOption);
copyEl.addEventListener("click", copyPassword);
rangeInput.addEventListener("input", generateValue);

function generateValue() {
  currentValue = rangeInput.value;
  passwordLength.textContent = `Password Length: ${rangeInput.value}`;
  optionEl.textContent = generatePassword();
}

function generateRandomCharacter() {
  let getIndex = Math.floor(Math.random() * customCharacters.length);
  return customCharacters[getIndex];
}

function generatePassword() {
  const uppercaseEl = document.getElementById("uppercase-el");
  const lowercaseEl = document.getElementById("lowercase-el");
  const numbersEl = document.getElementById("numbers-el");
  const symbolsEl = document.getElementById("symbols-el");
  let currentPassword = "";
  customCharacters = [];

  if (uppercaseEl.checked) {
    customCharacters.push(...uppercaseCharacters);
  }

  if (lowercaseEl.checked) {
    customCharacters.push(...lowercaseCharacters);
  }

  if (numbersEl.checked) {
    customCharacters.push(...numbers);
  }

  if (symbolsEl.checked) {
    customCharacters.push(...symbols);
  }

  if (customCharacters.length === 0) {
    optionEl.textContent = "";
    document.getElementById("select-message").textContent =
      "ERROR: Please select at least one option.";
    return "";
  }

  for (let i = 0; i < currentValue; i++) {
    currentPassword += generateRandomCharacter();
  }

  document.getElementById("select-message").textContent = "";
  return currentPassword;
}

function passwordOption() {
  return (optionEl.textContent = generatePassword());
}

function copyPassword() {
  navigator.clipboard.writeText(optionEl.textContent);
  tooltip.classList.add("show");
  setTimeout(() => {
    tooltip.classList.remove("show");
  }, 2000);
}
