
BarChart=(arr)=>{
    // for(let i=0; i<arr.length; i++){
    //     let bar = "";
    //     for(let j=0; j<arr[i]; j++){
    //         bar += "*";
    //     } 
    //     console.log(i+1+" "+bar);
    // }


    return arr.map((value,index)=>{
        return `${index+1}:${"*".repeat(value)}`;
    }).join("\n")
}
console.log( BarChart([5,3,9,12]))