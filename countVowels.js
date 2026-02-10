const countVowels = (str) => {
    let count = 0;
    const vowels = "aeiou";

    str = str.toLowerCase();

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

console.log(countVowels("Hello how are you")); 
