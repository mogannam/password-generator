// Assignment code here

function generatePassword(){
  var passLength  = 8;
  var useSpecialChar = "false";
  var uselowerCase = "false";
  var useUpperCase = "false";
  var useNumber = "false";

  var specialCharString= "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  var alphabetLower = "abcdefghijklmnopqrstuvwxyz"
  var alphabetUpper = alphabetLower.toUpperCase();
  

  passLength = window.prompt("Enter the password lenght between 8 and 128 characters")
  // check is password length is a number between 8 and 128 char. Else set it to 8.
  passLength = parseInt(passLength);  // user input is always take in as a string so you must convert it to an int if possible
  if((passLength < 8 || passLength > 128) ||  typeof passLength != "number")
    passLength = window.prompt (" The paossword length is not between 8 & 128 characters. Try again, otherwise 8 characters will be used")
  passLength = parseInt(passLength);
  if(passLength < 8 || passLength > 128 || (typeof passLength != "number"))
    passLength = 8;

  
  // validate if they want special characters
  useSpecialChar=window.prompt("Enter \'Y\' for yes, to include special sharacters in your password.")
  if(useSpecialChar.toUpperCase() === 'Y')
    useSpecialChar =true;
  else
    useSpecialChar =false;

  // validate if they want lower case letters
  uselowerCase = window.prompt("Enter'Y\' for yes, to include lower case letters.")
  if(uselowerCase.toUpperCase() === 'Y')
    uselowerCase = true
  else
    uselowerCase = false;
  
  // validate if uppercase letters are used
  useUpperCase = window.prompt("Enter'Y\' for yes, to include upper case letters.")
  if(useUpperCase.toUpperCase() === 'Y')
    useUpperCase =true;
  else
  useUpperCase = false;

  useNumber = window.prompt("Enter'Y\' for yes, to include numbers.")
  if(useNumber.toUpperCase() === 'Y')
    useNumber = true
  else
    useNumber = false;
  console.log(`passLength: ${passLength} \n useSpecialChar: ${useSpecialChar} \n uselowerCase: ${uselowerCase} \n useUpperCase ${useUpperCase} \n useNumber: ${useNumber}`)
  

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  password = 'testing123'
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
