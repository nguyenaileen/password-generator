// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  // ask for number of characters

  // ask if user wants lowercase in password

  //ask if user wants uppercase in password

  // ask if user wants special characters in password

  //for each character in the password 
    //select a character chosen character type randomly
    
    // randomly select a character from chosent character type

    //add it to the password


}