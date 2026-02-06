const sumOfDigits=(arr)=>{
    // console.log(typeof arr)
    
    arr=Array.from(String(arr),Number)
    // return arr.reduce((prev,curr)=>curr+=prev,0)

    //using map
    sum=0;
    arr.map((prev)=>sum+=prev,0)
    return sum;
}


console.log(sumOfDigits(12345))