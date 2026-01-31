const isPalindrome=(str)=>{
    str=str.toLowerCase().replace(/\W/g,"") //replace all with space except A-Z,a-z,0-9

    let rstr=str.split("").reverse().join('')

    return str==rstr?true:false;
}



console.log(isPalindrome("anna"))
console.log(isPalindrome("hello"))