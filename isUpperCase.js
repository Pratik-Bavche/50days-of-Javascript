const isUpper = (ch) => {
    const ascii = ch.charCodeAt();
    return ascii >= 65 && ascii <= 90;
}

const isLower = (ch) => {
    const ascii = ch.charCodeAt();
    return ascii >= 97 && ascii <= 122;
}

console.log(isUpper("a"))  // true
console.log(isLower("A"))  // true
