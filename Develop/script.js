// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength  = window.prompt("Enter the password lenght between 8 and 128 characters")
  var useSpecialChar = window.prompt("Enter \'Y\' for yes, to include special sharacters in your password.")
  var uselowerCase = window.prompt("Enter'Y\' for yes, to include lower case letters.")
  var useUpperCase = window.prompt("Enter'Y\' for yes, to include upper case letters.")
  var useNumber = window.prompt("Enter'Y\' for yes, to include numbers.")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  password = 'testing123'
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
