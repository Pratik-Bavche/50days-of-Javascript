const isPalindrome=(str)=>{
    str=str.toLowerCase().replace(/\W/g,"")

    let rstr=str.split("").reverse().join('')

    return str==rstr?true:false;
}



console.log(isPalindrome("anna"))
console.log(isPalindrome("hello"))