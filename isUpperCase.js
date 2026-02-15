// const isUpper = (ch) => {
//     const ascii = ch.charCodeAt();
//     return ascii >= 65 && ascii <= 90;
// }

// const isLower = (ch) => {
//     const ascii = ch.charCodeAt();
//     return ascii >= 97 && ascii <= 122;
// }

//Simple Approach
// const isUpper = (ch) => ch >= 'A' && ch <= 'Z';
// const isLower = (ch) => ch >= 'a' && ch <= 'z';



//Direct Check
const isUpper = (ch) => {
    return ch===ch.toUpperCase();
}

const isLower = (ch) => {
   return ch===ch.toLowerCase();
}

console.log(isUpper("a"))  // true
console.log(isLower("A"))  // true
