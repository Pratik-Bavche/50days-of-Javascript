
const isPowerTwo=(no)=>{
    for(i=1;i<=no;i++) if(2**i==no) return true;
    return false;
}

console.log(isPowerTwo(64))