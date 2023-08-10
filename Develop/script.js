// Assignment code here
function generatePassword() {
    const lowercase = 'qwertyuiopasdfghjklzxcvbnm'
    const uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    const special = '!@#$%^&*'
    const number = '123456789'
  
    var passwordLength = Number(prompt('how many characters would you like your password to have?'))
  
    console.log(passwordLength)
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