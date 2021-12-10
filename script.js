// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array for lowercase alphabet
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// Array for uppercase alphabet
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// Array for symbols
var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","<",",",">",".","?","/","'",'"',":",","]
// Array for numbers
var numbers = ["1","2","3","4","5","6","7","8","9","0"]

// Array to pick from
var generationOptions = []

// Write password to the #password input
function writePassword() {

  // prompts for password criteria 

  // password length (8-128)
  var passwordLength = window.prompt("What is the password length? Should be 8 - 128 characters.");
    var passwordLength = Number(passwordLength);
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert("Please enter a number between 8 and 128!");
      return false;
    }
    else {
      console.log(passwordLength, typeof passwordLength);
    }

  // lowercase?
  var confirmLowerCase = window.confirm("Allow lowercase letters?");
    if (confirmLowerCase) {
      console.log("yes");
    }
    else {
      console.log("no");
    }
  // uppercase?
  var confirmUpperCase = window.confirm("Allow UPPERCASE letters?");
    if (confirmUpperCase) {
      console.log("yes");
    } 
    else {
      console.log("no");
    }
  // numeric?
  var confirmNumeric = window.confirm("Allow numeric values?");
    if (confirmNumeric) {
      console.log("yes");
    }
    else {
      console.log("no");
    }
  // symbols?
  var confirmSymbol = window.confirm("Allow symbols?");
    if (confirmSymbol) {
      console.log("yes");
    }
    else {
      console.log("no");
    }
  return;
  // function to combine arrays
  // pick random

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
