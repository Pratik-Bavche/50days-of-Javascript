const sumOfDigits=(arr)=>{
    // console.log(typeof arr)
    arr=Array.from(String(arr),Number)
    return arr.reduce((prev,curr)=>curr+=prev,0)
}


console.log(sumOfDigits(12345))