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
var charLower = ["abcdefghijklmnopqrstuvwxyz"];
var charUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var charNumber = ["0123456789"];
var charSpecial = ["\"\~`!@#$%^&*()-_+={}[]|\;:<>,./?"];

function generatePassword () {
  var userPw = "";

  // ask for number of characters
  var pwLength = prompt ("How many characters would you like your password to be? \nPlease enter a numerical value from 8-128.\n ")

    //check if user entered a number between 8-128

  // ask if user wants lowercase in password
  var charLower = confirm ("Would you like lowercase letters in your password? \nPress ok for yes and cancel for no.\n")

  //ask if user wants uppercase in password
  var charUpper = confirm ("Would you like uppercase letters in your password? \nPress ok for yes and cancel for no.\n")

  // ask if user wants numbers in password
  var charNumber = confirm ("Would you like numbers in your password? \nPress ok for yes and cancel for no.\n")

  // ask if user wants special characters in password
  var charSpecial = confirm ("Would you like special characters in your password? \nPress ok for yes and cancel for no.\n")

  //for each character in the password 
    //select a character chosen character type randomly

    // randomly select a character from chosent character type

    //add it to the password


}