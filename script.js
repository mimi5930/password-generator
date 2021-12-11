// Document elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Array for lowercase alphabet
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// Array for uppercase alphabet
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// Array for symbols
var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","<",",",">",".","?","/","'",'"',":",","]
// Array for numbers
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
// Array for final password
var password = []

function writePassword() {
  // reset password
  resetPassword()
  // password length input
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
      var lowerCaseAdd = lowerCase;
      console.log(lowerCaseAdd);
    }
    else {
      var lowerCaseAdd = [];
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
      console.log(upperCaseAdd);
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
  
  // generate password using the specifiec length and characterPool array
  generatePassword(characterPool, passwordLength);
}


function generatePassword(characterPool, passwordLength) {
  console.log(characterPool + "is the character pool at the start of the function");
  console.log(passwordLength);
  // loop through the function n times based on length entered
  for (var i = 0; i < passwordLength; i++) {
    // choose random number from array
    var rand = Math.floor(Math.random() * characterPool.length);
    // add randomized array item to password
    password.push(characterPool[rand]);
  }
  console.log(password);
  createPasswordText();
}

function createPasswordText() {
  console.log("current password value " + password);
  var passwordJoined = password.join("");
  passwordText.value = passwordJoined;
  return;
}

function resetPassword() {
  password = [];
  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
