const validateDate = (date) => {
    return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/((19|20)[0-9]{2})$/.test(date);
};

console.log(validateDate("12/15/2021"));
console.log(validateDate("02/29/2021"));
console.log(validateDate("02/32/2021"));
console.log(validateDate("01/1/1800"));
console.log(validateDate("13/01/2005"));