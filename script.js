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

// beginning array
var emptyArray = []

// Write password to the #password input
function writePassword() {

  // prompts for password criteria 

  // password length (8-128)
  var passwordLength = window.prompt("What is the password length? Should be 8 - 128 characters.");
    var passwordLength = Number(passwordLength);
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert("Please enter a number between 8 and 128!");
      writePassword();
    }
    else {
      console.log(passwordLength, typeof passwordLength);
    }



  // lowercase?
  var confirmLowerCase = window.confirm("Allow lowercase letters?");
    if (confirmLowerCase) {
      var lowerCaseAdd = emptyArray.concat(lowerCase);
      console.log(lowerCaseAdd);
    }
    else {
      var lowerCaseAdd = emptyArray
      console.log(lowerCaseAdd);
    }
  // uppercase?
  var confirmUpperCase = window.confirm("Allow UPPERCASE letters?");
    if (confirmUpperCase) {
      var upperCaseAdd = lowerCaseAdd.concat(upperCase);
      console.log(upperCaseAdd);
    } 
    else {
      var upperCaseAdd = lowerCaseAdd;
      console.log(upperCaseAdd)
    }
  // numeric?
  var confirmNumeric = window.confirm("Allow numeric values?");
    if (confirmNumeric) {
      var numberAdd = upperCaseAdd.concat(numbers);
      console.log(numberAdd);
    }
    else {
      var numberAdd = upperCaseAdd;
      console.log(numberAdd);
    }
  // symbols?
  var confirmSymbol = window.confirm("Allow symbols?");
    if (confirmSymbol) {
      var symbolAdd = numberAdd.concat(symbols);
      console.log(symbolAdd);
      var characterPool = symbolAdd;
      console.log(characterPool);
    }
    else {
      var characterPool = numberAdd;
      console.log(characterPool);
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
