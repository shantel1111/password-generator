const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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
// const uppercaseCharacters =
// const lowercaseCharacters =
// const numbers =
// const symbols =

let passwordLength = document.getElementById("password-length");
let rangeInput = document.getElementById("range-input");
let rangeValue = "";

rangeInput.addEventListener("input", function () {
  rangeValue = rangeInput.value;
  passwordLength.textContent = `Password Length: ${rangeInput.value}`;
  console.log(rangeInput.value);
});

function generateRandomCharacter() {
  let getIndex = Math.floor(Math.random() * characters.length);
  return characters[getIndex];
}

function generatePassword() {
  let randomPassword = "";
  for (let i = 0; i < rangeValue; i++) {
    randomPassword += generateRandomCharacter();
  }
  console.log(randomPassword);
  return randomPassword;
}

let buttonEl = document.getElementById("button-el");
let optionOne = document.getElementById("optionOne-el");

buttonEl.addEventListener("click", function passwordOptions() {
  optionOne.textContent = generatePassword();
});

