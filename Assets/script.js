// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
// This object holds the arrays of acceptible characters to be used in the generator with the key being the same number as prompted for from the user during the character selection.
var charObj = {
  1: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  2: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  3: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  4: ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"],
};

// Function returns a password based off of the users input with password length and acceptible character types.
function passwordGenerator(passLength, charTypeArray) {
  var randomType, randomChar;
  var passwordStr = "";
  for (i = 0; i < passLength; i++) {
    randomType =
      charTypeArray[Math.floor(Math.random() * charTypeArray.length)];
    randomChar =
      charObj[randomType][
        Math.floor(Math.random() * charObj[randomType].length)
      ];
    passwordStr = passwordStr + randomChar;
  }
  return passwordStr;
}

// Function sets password length to an integer.
function passwordLength() {
  // Prompt asks the user for password length.
  var passLength = parseInt(
    prompt(
      "Choose a length of at least 8 characters and no more than 128 characters"
    )
  );

  // If statement checks if the password length IS a number AND is >= 8 AND <= 128.
  if (!isNaN(passLength) && passLength >= 8 && passLength <= 128) {
    console.log("Password length is: " + passLength);
    return passLength;
    // Alerts the user for invalid password length.
  } else {
    alert(
      "Invalid password length input. Please choose a number between 8-128."
    );
    passLength = false;
    return passLength;
  }
}

// Prompt asks user for character type.
function passwordType() {
  var charTypeInt;
  var charType = prompt(
    "Choose character types from the following selection and enter the number of the value below. If choosing multiple character types, seperate using a comma and no additional spaces: \n1.) Lowercase \n2.) Uppercase \n3.) Numeric \n4.) Special Characters"
  );
  var charTypeArray = charType.split(",");
  // Spread syntax removes dupplicate entries from the array.
  var uniqArray = [...new Set(charTypeArray)];
  charTypeArray = uniqArray;
  if (charType.indexOf(" ") !== -1) {
    alert("Invalid character type input. Please try again.");
    charTypeArray = false;
    return charTypeArray;
  }

  // For loop stops iterating after the length of the charTypeArray
  var charTypeCheck = true;
  for (i = 0; i < charTypeArray.length; i++) {
    charTypeInt = parseInt(charTypeArray[i]);
    charTypeArray[i] = charTypeInt;
    // If statement says if the charTypeInt is NOT a number between 1-4, then it sets charTypeCheck to false
    if (isNaN(charTypeInt) || charTypeInt < 1 || charTypeInt > 4) {
      charTypeCheck = false;
    }
  }
  // If statement checks if character input IS a number.
  if (charTypeCheck) {
    return charTypeArray;
    // If user input is NaN, alert sent to try again.
  } else {
    alert("Invalid character type input. Please try again.");
    charTypeArray = false;
    return charTypeArray;
  }
}

// Loop prompts the user for input while it matches criteria.
function generatePassword() {
  var passLength = false;
  while (passLength === false) {
    passLength = passwordLength();
    //Function returns false OR a number between 8-128.
    console.log(passLength);
  }

  // charTypeArray is locally scoped, so can reuse it in this function
  var charTypeArray = false;
  while (charTypeArray === false) {
    //Function false OR a number between 8-128.
    charTypeArray = passwordType();
    console.log(charTypeArray);
  }

  var passwordStr = passwordGenerator(passLength, charTypeArray);
  return passwordStr;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to button to generate password when clicked.
generateBtn.addEventListener("click", writePassword);
