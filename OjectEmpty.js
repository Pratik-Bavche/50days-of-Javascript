
isMTCheck=(obj)=>{
    for(let key in obj)
    {
        if(obj.hasOwnProperty(key))
        {
            return `Its not empty`
        }
    }
    return `Its empty`
}



console.log(isMTCheck({name:"Pratik"}))
console.log(isMTCheck({}))