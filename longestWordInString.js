const find=(str)=>{
    if(str.trim().length===0) return false;
    //console.log(str)
    const strArr=str.split(" ");
    strArr.sort((a,b) => a.length-b.length); //ascending order
    // strArr.sort((a,b) => b.length-a.length); //descending order
    return strArr.at(-1);
}

console.log(find("Pratik Bavche Patil"));