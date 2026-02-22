
const factRecursion=(no)=>{
    if(no === 0) return 1;
    return no*factRecursion(no-1);
}

console.log(factRecursion(5))