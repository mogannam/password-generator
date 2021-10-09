// Assignment code here

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePassword(){
  // generate a random password, based on user critera
  // if no criteria is selected, generate a password of
  // lowercase letters of length 8
  var passLength  = 8;
  var useSpecialChar = "false";
  var uselowerCase = "true";
  var useUpperCase = "false";
  var useNumber = "false";

  var specialCharString= "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  var specialCharStrLen = specialCharString.length;
  var alphabetLowerString = "abcdefghijklmnopqrstuvwxyz"
  var alphabetUpperString = alphabetLowerString.toUpperCase();
  var numbersString = "0123456789";
  var randomArrKeys = [] // an array that will be used to make random decisions based on user password criteria.
  var randomPass = ""; // the random password to return at the end
  var totalOptions = 4; // a int representing 4 possible choices, int, specialChar, uppercaseLetter, lowercaseLetter
  // var randomCriteriaMap = {"useSpecialChar": specialCharString, "uselowerCase": alphabetLowerString, "useUpperCase": alphabetUpperString, "useNumber": useNumber }

  passLength = window.prompt("Enter the password lenght between 8 and 128 characters")
  // check is password length is a number between 8 and 128 char. Else set it to 8.
  passLength = parseInt(passLength);  // user input is always take in as a string so you must convert it to an int if possible
  if((passLength >= 8 && passLength <= 128) &&  typeof passLength === "number")
    passLength = passLength;
  else
    passLength =8;

  // validate if they want lower case letters
  // if they select no criteria at all, the default is to use lowercase letters
  uselowerCase = window.prompt("Enter'Y\' for yes, to include lower case letters. Anything else will skip the criteria.")
  if(uselowerCase.toUpperCase() === 'Y')
    uselowerCase = true //if they want lowercase letters
  else
    uselowerCase = false; // they don't want lower case


  // validate if uppercase letters are used
  useUpperCase = window.prompt("Enter'Y\' for yes, to include upper case letters. Anything else will skip the criteria.")
  if(useUpperCase.toUpperCase() === 'Y')
    useUpperCase =true;
  else
  useUpperCase = false;
  
  // validate if they want special characters
  useSpecialChar=window.prompt("Enter \'Y\' for yes, to include special sharacters in your password. Anything else will skip the criteria.")
  if(useSpecialChar.toUpperCase() === 'Y')
    useSpecialChar =true;
  else
    useSpecialChar =false;


  useNumber = window.prompt("Enter'Y\' for yes, to include numbers. Anything else will skip the criteria. ")
  if(useNumber.toUpperCase() === 'Y')
    useNumber = true
  else
    useNumber = false;
 
  // if they select no criteria at all,
  //  then generate a password with only lowercase letters
 
  
  if(!useNumber && !useSpecialChar && !useUpperCase && !uselowerCase)
  {
    window.alert("You selected no criteria. Password generated with lowercase letters only.")
    uselowerCase = true;
  }
  console.log(` passLength: ${passLength} \n uselowerCase: ${uselowerCase} \n useUpperCase ${useUpperCase} \n useSpecialChar: ${useSpecialChar}  \n useNumber: ${useNumber}`)
  


  // while the random password is not of the password length
  // keep randomly selecting a character from number, int, letterUpper, letterLower, special
  randomPass = "";
  totalOptions = 1
  randomArrKeys = []

  if(useSpecialChar)// if true we are allowed to use the character
    randomArrKeys.push("useSpecialChar");
  if(uselowerCase)
    randomArrKeys.push("uselowerCase")
  if(useUpperCase) 
    randomArrKeys.push("useUpperCase")
  if(useNumber)
    randomArrKeys.push("useNumber")
  
  
  
  totalOptions = randomArrKeys.length
  
  console.log(randomArrKeys , totalOptions)
  var randomChoice = getRandomInt(totalOptions);
  // while the random password built is not of the specified length
  while(randomPass.length < passLength){ 
    // generate a random number to represent a random criteria choice
    randomChoice = getRandomInt(totalOptions);
    //swap the random choice as an int with its string equivelent, so
    // that I can index the key/ value pair map
    randomChoice = randomArrKeys[randomChoice]

    //if int chose a random number between 0 and 9
    if(randomChoice === "useNumber")
      randomPass+= numbersString[getRandomInt(10)]
    else if (randomChoice === "uselowerCase"){// if lowercase letter choose, 1 of 26 letters
      randomPass+= alphabetLowerString[getRandomInt(26)]
    }
    else if(randomChoice === "useUpperCase"){// if uppercase, choose of 26 letters
      randomPass += alphabetUpperString[getRandomInt(26)]
    }
    else //if special char choose one of the speciaal chars
    randomPass += specialCharString[getRandomInt(specialCharStrLen)]
  }
  //console.log(randomPass)
  return randomPass

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
