const passVal = (str) => {
    if (str.length < 8) return false;

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/;

    return regex.test(str);
};

console.log(passVal("ahBNH1"));      
console.log(passVal("ahBNH123"));    