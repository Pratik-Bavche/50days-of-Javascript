const removeDup=(arr)=>{
    // arr=Array.from(String(arr),Number)
    // let newArr=[...new Set(arr)]
    // return newArr

    //using filter
    return  arr.filter((value,index,self)=> self.indexOf(value) === index);
}   



console.log(removeDup([1,2,3,4,2,1,2,32,1]))