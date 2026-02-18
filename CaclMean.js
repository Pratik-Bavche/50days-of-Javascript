
const calcMean=(arr)=>{
    return arr.reduce((prev,curr)=>prev+curr)/arr.length
}

console.log(calcMean([1,2,3,4,5]))