
const randomHex=()=>{
    return `#${Math.random().toString(16).substring(2,8).padEnd(6,0)}`;
}

//padEnd used to add extra letter if there are ot 6 letters in string then a the end add 0's


console.log(randomHex())