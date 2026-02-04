
const ArrayEQ=(a1,a2)=>{
    if(a1.length==0 || a2.length==0 || a1.length!=a2.length) return false;

    //Using Loops
    // for(i=0;i<a1.length;i++) if(a1[i]!=a2[i]) return false;
    // return true;

    //Using Every Method
    return a1.every((curr,ind)=>curr==a2[ind])
}




console.log(ArrayEQ([1,2,3],[1,2,3]))