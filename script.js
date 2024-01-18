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
//variables
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumber = "0123456789";
var charSpecial = "\"\~`!@#$%^&*()-_+={}[]|\;:<>,./?";



function generatePassword () {

  // ask for number of characters
  var pwLength = prompt ("How many characters would you like your password to be? \nPlease enter a numerical value from 8-128.\n ")

  //return error if not a numerical from 8-128
  //return error message if not numerical value
  if (isNaN(pwLength)){
    alert("Error! Please enter a numerical value. \nPlease choose a numerical value between 8-128.\n");
    return generatePassword;
  //return error message if less than 8 
  }else if (pwLength < 8){
    alert("Error! Your choice was less than 8. \nPlease choose a password length between 8-128 characters.\n");
    return generatePassword;
  //return error message if less than 8 
  }else if (pwLength > 128){
    alert("Error! Your choice was more than 128. \nPlease choose a password length between 8-128 characters.\n");
    return generatePassword;
  
  }else{
}
 
  // ask if user wants lowercase characters in password
  var charLowerInput = confirm ("Would you like lowercase letters in your password? \nPress Ok for yes and Cancel for no.\n")

  //ask if user wants uppercase characters in password
  var charUpperInput = confirm ("Would you like uppercase letters in your password? \nPress Ok for yes and Cancel for no\n")

  // ask if user wants numbers in password
  var charNumberInput = confirm ("Would you like numbers in your password? \nPress Ok for yes and Cancel for no\n")

  // ask if user wants special characters in password
  var charSpecialInput = confirm ("Would you like special characters in your password? \nPress Ok for yes and Cancel for no\n")

  //Error message if no character type is selected 
  if (!charLowerInput && !charUpperInput && !charNumberInput && !charSpecialInput){
    alert("Error! Please choose at least one type of character to be in your password. \nPlease try again.\n");
    return generatePassword;
  }

    // randomly select a character from chosen character type
    var randomChar = ""
    var finalPw = "";

    if (charLowerInput && charUpperInput && charNumberInput && charSpecialInput) {
      randomChar = charLower + charUpper + charNumber + charSpecial
  
      }else if (charLowerInput && charUpperInput && charNumberInput && !charSpecialInput) {
        randomChar =   charLower + charUpper + charNumber
  
      }else if (charLowerInput && charUpperInput && !charNumberInput && charSpecialInput) {
        randomChar = charLower + charUpper + charSpecial
  
      }else if (charLowerInput && !charUpperInput && charNumberInput && charSpecialInput) {
        randomChar = charLower + charNumber + charNumber
  
      }else if (charLowerInput && charUpperInput && !charNumberInput && !charSpecialInput) {
        randomChar = charLower + charUpper
  
      }else if (charLowerInput && !charUpperInput && charNumberInput && !charSpecialInput) {
        randomChar = charLower + charNumber
  
      }else if (charLowerInput && !charUpperInput && !charNumberInput && charSpecialInput) {
        randomChar =  charLower + charSpecial
  
      }else if (charLowerInput && !charUpperInput && !charNumberInput && !charSpecialInput) {
        randomChar = charLower
  
      }else if (!charLowerInput && charUpperInput && charNumberInput && charSpecialInput) {
        randomChar = charUpper + charNumber + charSpecial
  
      }else if (!charLowerInput && charUpperInput && !charNumberInput && charSpecialInput) {
        randomChar = charUpper + charSpecial
  
      }else if (!charLowerInput && charUpperInput && charNumberInput && !charSpecialInput) {
        randomChar = charUpper + charNumber
  
      }else if (!charLowerInput && charUpperInput && !charNumberInput && !charSpecialInput) {
        randomChar = charUpper
  
      }else if (!charLowerInput && !charUpperInput && charNumberInput && charSpecialInput) {
        randomChar = charNumber + charSpecial
  
      }else if (!charLowerInput && !charUpperInput && charNumberInput && !charSpecialInput) {
        randomChar =  charNumber
  
      }else{
        randomChar =  charSpecial
        
      }
        
      //select random character and add it to the password
      for (var i=0; i < pwLength; i++){
        finalPw += randomChar.charAt(Math.floor(Math.random() * randomChar.length));
  }
      return finalPw



}
