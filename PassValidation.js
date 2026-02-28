// const passVal = (str) => {
//     if (str.length < 8) return false;

//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/;

//     return regex.test(str);
// };

// console.log(passVal("ahBNH1"));      
// console.log(passVal("ahBNH123"));    



const passVal = (str) => {

    if (str.length < 8) return false;

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for (let i = 0; i < str.length; i++) {

        let code = str.charCodeAt(i);

        if (code >= 65 && code <= 90) hasUpper = true;

        else if (code >= 97 && code <= 122) hasLower = true;

        else if (code >= 48 && code <= 57) hasDigit = true;
    }

    return hasUpper && hasLower && hasDigit;
};

console.log(passVal("ahBNH1"));      
console.log(passVal("ahBNH123"));    