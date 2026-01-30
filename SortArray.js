
const sortArr=(arr)=>{
    // return arr.sort((a,b)=>a-b); //ascending Order
    return arr.sort((a,b)=>b-a); //descending Order
}


console.log(sortArr([5,7,3,57,2,6,1,9]))