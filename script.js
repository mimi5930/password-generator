// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array for lowercase alphabet
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// Array for uppercase alphabet
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// Array for symbols
var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","<",",",">",".","?","/"]
// Array for numbers
var numbers = ["1","2","3","4","5","6","7","8","9","0"]

// Array to pick from
var generationOptions = []

// Write password to the #password input
function writePassword() {
  // prompts for password criteria 
  // password length (8-128)
  // lowercase?
  // uppercase?
  // numeric?
  // symbols?

  // function to combine arrays
  // pick random

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
