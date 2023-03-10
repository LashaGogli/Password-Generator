
let firstcheckbox = document.querySelector("#firstcheckbox");
div1 = document.querySelector("#div1");
let secondcheckbox = document.querySelector("#secondcheckbox");
div2 = document.querySelector("#div2");
let thirdcheckbox = document.querySelector("#thirdcheckbox");
div3 = document.querySelector("#div3");
let fourthcheckbox = document.querySelector("#fourthcheckbox");
div4 = document.querySelector("#div4");

let countstrength = 0;
let strengthcheckdiv = document.querySelector(".strengthcheckdiv");
let strengthcheckP = document.querySelector(".strengthcheckP");


firstcheckbox.addEventListener("click", function () {
    if (firstcheckbox.checked) {
        countstrength++;
    } else countstrength--;
    if (countstrength == 0) {
        div1.style.backgroundColor = "#18171F";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "";


    } else if (countstrength == 1) {
        div1.style.backgroundColor = "#F64A4A";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "TOO WEAK!";

    } else if (countstrength == 2) {
        div1.style.backgroundColor = "#FB7C58";
        div2.style.backgroundColor = "#FB7C58";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "WEAK";

    } else if (countstrength == 3) {
        div1.style.backgroundColor = "#F8CD65";
        div2.style.backgroundColor = "#F8CD65";
        div3.style.backgroundColor = "#F8CD65";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "MEDIUM";

    }
    else if (countstrength == 4) {
        div1.style.backgroundColor = "#A4FFAF";
        div2.style.backgroundColor = "#A4FFAF";
        div3.style.backgroundColor = "#A4FFAF";
        div4.style.backgroundColor = "#A4FFAF";
        strengthcheckP.innerHTML = "STRONG";


    }

});
secondcheckbox.addEventListener("click", function () {
    if (secondcheckbox.checked) {
        countstrength++;
    } else countstrength--;
    if (countstrength == 0) {
        div1.style.backgroundColor = "#18171F";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "";


    } else if (countstrength == 1) {
        div1.style.backgroundColor = "#F64A4A";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "TOO WEAK!";

    } else if (countstrength == 2) {
        div1.style.backgroundColor = "#FB7C58";
        div2.style.backgroundColor = "#FB7C58";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "WEAK";

    } else if (countstrength == 3) {
        div1.style.backgroundColor = "#F8CD65";
        div2.style.backgroundColor = "#F8CD65";
        div3.style.backgroundColor = "#F8CD65";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "MEDIUM";

    }
    else if (countstrength == 4) {
        div1.style.backgroundColor = "#A4FFAF";
        div2.style.backgroundColor = "#A4FFAF";
        div3.style.backgroundColor = "#A4FFAF";
        div4.style.backgroundColor = "#A4FFAF";
        strengthcheckP.innerHTML = "STRONG";


    }
});
thirdcheckbox.addEventListener("click", function () {
    if (thirdcheckbox.checked) {
        countstrength++;
    } else countstrength--;
    if (countstrength == 0) {
        div1.style.backgroundColor = "#18171F";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "";


    } else if (countstrength == 1) {
        div1.style.backgroundColor = "#F64A4A";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "TOO WEAK!";

    } else if (countstrength == 2) {
        div1.style.backgroundColor = "#FB7C58";
        div2.style.backgroundColor = "#FB7C58";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "WEAK";

    } else if (countstrength == 3) {
        div1.style.backgroundColor = "#F8CD65";
        div2.style.backgroundColor = "#F8CD65";
        div3.style.backgroundColor = "#F8CD65";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "MEDIUM";

    }
    else if (countstrength == 4) {
        div1.style.backgroundColor = "#A4FFAF";
        div2.style.backgroundColor = "#A4FFAF";
        div3.style.backgroundColor = "#A4FFAF";
        div4.style.backgroundColor = "#A4FFAF";
        strengthcheckP.innerHTML = "STRONG";


    }

});
fourthcheckbox.addEventListener("click", function () {
    if (fourthcheckbox.checked) {
        countstrength++;
    } else countstrength--;
    if (countstrength == 0) {
        div1.style.backgroundColor = "#18171F";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "";


    } else if (countstrength == 1) {
        div1.style.backgroundColor = "#F64A4A";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "TOO WEAK!";

    } else if (countstrength == 2) {
        div1.style.backgroundColor = "#FB7C58";
        div2.style.backgroundColor = "#FB7C58";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "WEAK";

    } else if (countstrength == 3) {
        div1.style.backgroundColor = "#F8CD65";
        div2.style.backgroundColor = "#F8CD65";
        div3.style.backgroundColor = "#F8CD65";
        div4.style.backgroundColor = "#18171F";
        strengthcheckP.innerHTML = "MEDIUM";

    }
    else if (countstrength == 4) {
        div1.style.backgroundColor = "#A4FFAF";
        div2.style.backgroundColor = "#A4FFAF";
        div3.style.backgroundColor = "#A4FFAF";
        div4.style.backgroundColor = "#A4FFAF";
        strengthcheckP.innerHTML = "STRONG";


    }
});

let rangeInput = document.querySelector("#rangeInput");
let charLength = 4;
let span0 = document.querySelector(".span0");


rangeInput.addEventListener("input", function () {
    charLength = rangeInput.value;
    span0.innerHTML = charLength;
});




function generatePassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]|;:',.<>/?";
    let checkUppercase = 0;
    let checkLowcase = 0;
    let checkNumbers = 0;
    let checkSymbols = 0;
    let password = "";


    if (firstcheckbox.checked && secondcheckbox.checked && thirdcheckbox.checked && fourthcheckbox.checked) {
        do {
          password = "";
          checkUppercase = 0;
          checkLowcase = 0;
          checkNumbers = 0;
          checkSymbols = 0;
          for (let i = 0; i < length; i++) {
            let randomCharType = Math.floor(Math.random() * 4);
            if (randomCharType === 0) {
              password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
              checkUppercase++;
            } else if (randomCharType === 1) {
              password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
              checkLowcase++;
            } else if (randomCharType === 2) {
              password += numbers.charAt(Math.floor(Math.random() * numbers.length));
              checkNumbers++;
            } else {
              password += symbols.charAt(Math.floor(Math.random() * symbols.length));
              checkSymbols++;
            }
          }
        } while (checkUppercase == 0 || checkLowcase == 0 || checkNumbers == 0 || checkSymbols == 0);
      }
      
    else if (firstcheckbox.checked && secondcheckbox.checked && thirdcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 3);
                if (randomCharType === 0) {
                    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                    checkUppercase++;
                } else if (randomCharType === 1) {
                    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                    checkLowcase++;
                } else {
                    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    checkNumbers++;
                }
            }
        } while (checkUppercase == 0 || checkLowcase == 0 || checkNumbers == 0);

    } else if (firstcheckbox.checked && secondcheckbox.checked && fourthcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 3);
                if (randomCharType === 0) {
                    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                    checkUppercase++;
                } else if (randomCharType === 1) {
                    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                    checkLowcase++;
                } else {
                    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
                    checkSymbols++;
                }
            }
        } while (checkUppercase == 0 || checkLowcase == 0 || checkSymbols == 0);

    } else if (firstcheckbox.checked && thirdcheckbox.checked && fourthcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 3);
                if (randomCharType === 0) {
                    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                    checkUppercase++;
                } else if (randomCharType === 1) {
                    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    checkNumbers++;
                } else {
                    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
                    checkSymbols++;
                }
            }
        } while (checkUppercase == 0 || checkNumbers == 0 || checkSymbols == 0);

    }
    else if (secondcheckbox.checked && thirdcheckbox.checked && fourthcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 3);
                if (randomCharType === 0) {
                    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                    checkLowcase++;
                } else if (randomCharType === 1) {
                    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    checkNumbers++;
                } else {
                    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
                    checkSymbols++;
                }
            }
        } while (checkLowcase == 0 || checkNumbers == 0 || checkSymbols == 0);

    } else if (firstcheckbox.checked && secondcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 2);
                if (randomCharType === 0) {
                    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                    checkUppercase++;
                } else {
                    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                    checkLowcase++;
                }
            }
        } while (checkUppercase == 0 || checkLowcase == 0);

    } else if (firstcheckbox.checked && thirdcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 2);
                if (randomCharType === 0) {
                    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                    checkUppercase++;
                } else {
                    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    checkNumbers++;
                }
            }
        } while (checkUppercase == 0 || checkNumbers == 0);

    } else if (firstcheckbox.checked && fourthcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 2);
                if (randomCharType === 0) {
                    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                    checkUppercase++;
                } else {
                    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
                    checkSymbols++;
                }
            }
        } while (checkUppercase == 0 || checkSymbols == 0);

    } else if (secondcheckbox.checked && thirdcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 2);
                if (randomCharType === 0) {
                    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                    checkLowcase++;
                } else {
                    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    checkNumbers++;
                }
            }
        } while (checkLowcase == 0 || checkNumbers == 0);

    }
    else if (secondcheckbox.checked && fourthcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 2);
                if (randomCharType === 0) {
                    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                    checkLowcase++;
                } else {
                    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
                    checkSymbols++;
                }
            }
        } while (checkLowcase == 0 || checkSymbols == 0);

    }
    else if (thirdcheckbox.checked && fourthcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 2);
                if (randomCharType === 1) {
                    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    checkNumbers++;
                } else {
                    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
                    checkSymbols++;
                }
            }
        } while (checkNumbers == 0 || checkSymbols == 0);

    } else if (firstcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 1);
                if (randomCharType === 0) {
                    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                    checkUppercase++;
                }
            }
        } while (checkUppercase == 0);

    }
    else if (secondcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 1);
                if (randomCharType === 0) {
                    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                    checkLowcase++;
                }
            }
        } while (checkLowcase == 0);

    }
    else if (thirdcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 1);
                if (randomCharType === 0) {
                    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    checkNumbers++;
                }
            }
        } while (checkNumbers == 0);

    }
    else if (fourthcheckbox.checked) {
        do {
            password = "";
            checkUppercase = 0;
            checkLowcase = 0;
            checkNumbers = 0;
            checkSymbols = 0;
            for (let i = 0; i < length; i++) {

                let randomCharType = Math.floor(Math.random() * 1);
                if (randomCharType === 0) {
                    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
                    checkSymbols++;
                }
            }
        } while (checkSymbols == 0);

    }



    return password;

}




let generate = document.querySelector(".generate");
let defaultpassword = document.querySelector(".defaultpassword");



generate.addEventListener("click", function () {
    password = generatePassword(charLength);
    defaultpassword.value = password;
    defaultpassword.style.opacity = "1";
    defaultpassword.style.backgroundColor = "#24232C";

})



let copyicon = document.querySelector(".copyicon");





copyicon.addEventListener("click", function () {
    defaultpassword.select();
    navigator.clipboard.writeText(defaultpassword.value);
});

