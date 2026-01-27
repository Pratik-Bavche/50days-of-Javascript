
const generateHashTag=(str)=>{
    if(str.length>280 || str.trim().length===0) return false;

    str=str.split(" ");


    //use map method to capitalize each and every char of word in string

    // str=str.map((curr)=> curr.replace(curr[0],curr[0].toUpperCase()))


    //using charAt method
    str=str.map((curr)=> curr.charAt(0).toUpperCase()+curr.substring(1,curr.length) )

    return "#"+str.join("");
}

console.log(generateHashTag("pratik Bavche Patil"))