
const ArrayEQ=(a1,a2)=>{
    if(a1.length==0 || a2.length==0 || a1.length!=a2.length) return false;
    for(i=0;i<a1.length;i++) if(a1[i]!=a2[i]) return false;
    return true;
}




console.log(ArrayEQ([1,2,3],[1,2,3]))