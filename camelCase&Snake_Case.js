
const camelCase=(str)=>{
    return str.toLowerCase().split(" ").map((s,id)=>{
        if(id==0) return s;
        return s.charAt(0).toUpperCase()+s.slice(1);
    }) .join("");
}

console.log(camelCase("hello worLd"))