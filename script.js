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

function generatePassword() {
    // prompt for pwdlength
    var pwdLength = window.prompt("how many characters? (From 8-128)"); 

    // if's statements for pwdlength
    if (!(8< pwdLength < 128)  ) { window.alert(pwdLength + " Please enter a valid number. ")
    window.prompt("how many characters? (From 8-128)");
    }
    if (pwdLength < 8) { window.alert(pwdLength + " Password needs at least 8 characters. ")
    window.prompt("how many characters? (From 8-128)");
    } 
    if (pwdLength > 128) { window.alert(pwdLength + " Password needs to be smaller than 128 characters. ")
    window.prompt("how many characters? (From 8-128)");
    }
  
    // prompt for pwdCharacters
    var pwdCharacters = window.confirm("would you like to include special characters?");

    // if's statements for pwdlength
    if (!pwdCharacters){
      pwdCharacters = window.prompt(" Invalid Password ");
    }

    // Random Character Engine
    
    var length = pwdLength
    var  characterset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-_+={}[]|:;'<>,.?"
    var  password = ""
    
      for (var i = 0 ; i <= length ; i++) {
      var randopass = Math.floor(Math.random() * characterset.length);
      password += characterset.substring(randopass, randopass +1);
    }

    return password;  
 
    }