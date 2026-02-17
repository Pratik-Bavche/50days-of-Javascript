
const revStr=(str)=>{
    //using split
    // return str.split("").reverse().join("");

    //Using loops
    let s="";
    for(i=str.length-1;i>=0;i--)
    {
        s+=str.charAt(i);
    }
    return s;
}

//String in JS are immutable

console.log(revStr("Abc"))