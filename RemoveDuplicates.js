const removeDup=(arr)=>{
    // arr=Array.from(String(arr),Number)
    let newArr=[...new Set(arr)]
    return newArr
}   



console.log(removeDup([1,2,3,4,2,1,2,32,1]))