function generatePassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]|;:',.<>/?";
    let checkUppercase = 0;
    let checkLowcase = 0;
    let checkNumbers = 0;
    let checkSymbols = 0;
    let password="";

    do {
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
    } while (checkUppercase == 0 || checkLowcase == 0 || checkNumbers == 0 || checkSymbols == 0 );

    return password;
    
}


const password = generatePassword(12);
console.log(password);

