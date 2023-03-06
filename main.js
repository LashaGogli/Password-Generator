
let firstcheckbox = document.querySelector("#firstcheckbox");
div1 = document.querySelector("#div1");
let secondcheckbox = document.querySelector("#secondcheckbox");
div2 = document.querySelector("#div2");
let thirdcheckbox = document.querySelector("#thirdcheckbox");
div3 = document.querySelector("#div3");
let fourthcheckbox = document.querySelector("#fourthcheckbox");
div4 = document.querySelector("#div4");

let countstrength = 0;


firstcheckbox.addEventListener("click", function () {
    if (firstcheckbox.checked) {
        countstrength++;
    } else countstrength--;
    if (countstrength == 0) {
        div1.style.backgroundColor = "#18171F";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";

    } else if (countstrength == 1) {
        div1.style.backgroundColor = "#F64A4A";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";

    } else if (countstrength == 2) {
        div1.style.backgroundColor = "#FB7C58";
        div2.style.backgroundColor = "#FB7C58";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";

    } else if (countstrength == 3) {
        div1.style.backgroundColor = "#F8CD65";
        div2.style.backgroundColor = "#F8CD65";
        div3.style.backgroundColor = "#F8CD65";
        div4.style.backgroundColor = "#18171F";

    }
    else if (countstrength == 4) {
        div1.style.backgroundColor = "#A4FFAF";
        div2.style.backgroundColor = "#A4FFAF";
        div3.style.backgroundColor = "#A4FFAF";
        div4.style.backgroundColor = "#A4FFAF";

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

    } else if (countstrength == 1) {
        div1.style.backgroundColor = "#F64A4A";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";

    } else if (countstrength == 2) {
        div1.style.backgroundColor = "#FB7C58";
        div2.style.backgroundColor = "#FB7C58";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";

    } else if (countstrength == 3) {
        div1.style.backgroundColor = "#F8CD65";
        div2.style.backgroundColor = "#F8CD65";
        div3.style.backgroundColor = "#F8CD65";
        div4.style.backgroundColor = "#18171F";

    }
    else if (countstrength == 4) {
        div1.style.backgroundColor = "#A4FFAF";
        div2.style.backgroundColor = "#A4FFAF";
        div3.style.backgroundColor = "#A4FFAF";
        div4.style.backgroundColor = "#A4FFAF";

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

    } else if (countstrength == 1) {
        div1.style.backgroundColor = "#F64A4A";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";

    } else if (countstrength == 2) {
        div1.style.backgroundColor = "#FB7C58";
        div2.style.backgroundColor = "#FB7C58";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";

    } else if (countstrength == 3) {
        div1.style.backgroundColor = "#F8CD65";
        div2.style.backgroundColor = "#F8CD65";
        div3.style.backgroundColor = "#F8CD65";
        div4.style.backgroundColor = "#18171F";

    }
    else if (countstrength == 4) {
        div1.style.backgroundColor = "#A4FFAF";
        div2.style.backgroundColor = "#A4FFAF";
        div3.style.backgroundColor = "#A4FFAF";
        div4.style.backgroundColor = "#A4FFAF";

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

    } else if (countstrength == 1) {
        div1.style.backgroundColor = "#F64A4A";
        div2.style.backgroundColor = "#18171F";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";

    } else if (countstrength == 2) {
        div1.style.backgroundColor = "#FB7C58";
        div2.style.backgroundColor = "#FB7C58";
        div3.style.backgroundColor = "#18171F";
        div4.style.backgroundColor = "#18171F";

    } else if (countstrength == 3) {
        div1.style.backgroundColor = "#F8CD65";
        div2.style.backgroundColor = "#F8CD65";
        div3.style.backgroundColor = "#F8CD65";
        div4.style.backgroundColor = "#18171F";

    }
    else if (countstrength == 4) {
        div1.style.backgroundColor = "#A4FFAF";
        div2.style.backgroundColor = "#A4FFAF";
        div3.style.backgroundColor = "#A4FFAF";
        div4.style.backgroundColor = "#A4FFAF";

    }
});

let rangeInput = document.querySelector("#rangeInput");
let charLength = 0;
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


    do {
        password="";
        for (let i = 0; i < length; i++) {

            const randomCharType = Math.floor(Math.random() * 4);
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


    return password;

}




let generate = document.querySelector(".generate");
let defaultpassword = document.querySelector(".defaultpassword");



generate.addEventListener("click", function () {
    password = generatePassword(charLength);
    defaultpassword.innerHTML = password;
})

