
isMTCheck=(obj)=>{
    // for(let key in obj)
    // {
    //     if(obj.hasOwnProperty(key))
    //     {
    //         return `Its not empty`
    //     }
    // }
    // return `Its empty`

    return Object.keys(obj).length===0?`Its empty`:`Its not empty`;
}



console.log(isMTCheck({name:"Pratik"}))
console.log(isMTCheck({}))