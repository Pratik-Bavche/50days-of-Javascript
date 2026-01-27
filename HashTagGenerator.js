
const generateHashTag=(str)=>{
    if(str.length>280 || str.trim().length===0) return false;

    str=str.split(" ");


    //use map method to capitalize each and every char of word in string

    str=str.map((curr)=> curr.replace(curr[0],curr[0].toUpperCase()))

    return "#"+str.join("");
}

console.log(generateHashTag("pratik Bavche Patil"))