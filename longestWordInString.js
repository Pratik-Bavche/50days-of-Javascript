const find=(str)=>{
    if(str.trim().length===0) return false;
    //console.log(str)
    const strArr=str.split(" ");
    // strArr.sort((a,b) => a.length-b.length); //ascending order
    strArr.sort((a,b) => b.length-a.length); //descending order
    // return strArr.at(-1);
    
    // return strArr[0];


    ///we can also do it using reduce method

    return strArr.reduce((prev,curr)=> curr.length>prev.length?curr:prev,"")
}

console.log(find("Pratik Bavcheee Patil"));