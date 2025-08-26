const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// let customCharacters = []
const uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


const loadEl = document.getElementById("load-el")
const optionOne = document.getElementById("optionOne-el");
const passwordLength = document.getElementById("password-length")
const rangeInput = document.getElementById("range-input");
let currentValue = rangeInput.value

// document.addEventListener("DOMContentLoaded", function(){
//    optionOne.textContent = generatePassword();
// })

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
  let currentPassword = '';
  let newPassword = '';
  for (let i = 0; i < currentValue; i++) {
    currentPassword += generateRandomCharacter();
    
    if(!uppercaseCharacters.includes(currentPassword[i])){
        newPassword += currentPassword[i]
    }
    
  }
  console.log(newPassword)
  console.log(currentPassword)
  return currentPassword;
}

// My notes
// So I have made a few new arrays for uppercase, lowercase, symbols and numbers. I am now checking if the current password has uppercase letters and if it does it will be pushed to new password that excludes the uppercase. I think ill have to do this for each one (lowercase, symbols and numbers) then I will have to check the length of the new password and see if it matches the password length value and if it doesnt the difference in the value selected will be used to generate password again. All has to be based on the user checkboxes too

function passwordOption(){
   return optionOne.textContent = generatePassword();
}

loadEl.addEventListener("click", passwordOption)




document.addEventListener("change", function(e){
  if (e.target.checked){
    console.log(e.target.id)
    notchecked(e.target.id)
    // document.getElementById("select-message").textContent = 'ERROR: You must choose at least one character set to generate a password.'
  } else {
    console.log(e.target.id)
  }
})

let customCharacters = []

function notchecked(target){
    if(!target.checked) {
     for(let i = 0; i < uppercaseCharacters.length; i++){
        customCharacters.push(uppercaseCharacters[i])
     }
   }
}   
console.log(customCharacters)

// // if its all checked maybe put it all in a checked function and
// then make a not checked function