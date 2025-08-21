const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


let loadEl = document.getElementById("load-el")
let optionOne = document.getElementById("optionOne-el");
let passwordLength = document.getElementById("password-length")
let rangeInput = document.getElementById("range-input");
let currentValue = rangeInput.value

document.addEventListener("DOMContentLoaded", function(){
   optionOne.textContent = generatePassword();
})

rangeInput.addEventListener("input", generateValue)

function generateValue(){
  currentValue = rangeInput.value
  passwordLength.textContent = `Password Length: ${rangeInput.value}`
  optionOne.textContent = generatePassword();
  // console.log(rangeInput.value)
}

function generateRandomCharacter() {
  let getIndex = Math.floor(Math.random() * characters.length);
  return characters[getIndex];
}

function generatePassword() {
  let randomPassword = "";
  for (let i = 0; i < currentValue; i++) {
    randomPassword += generateRandomCharacter();
  }
  // console.log(randomPassword)
  return randomPassword;
}

function passwordOption(){
   return optionOne.textContent = generatePassword();
}

loadEl.addEventListener("click", passwordOption)


// 1. create a function that checks whether checkbox is checked and what character it uses

