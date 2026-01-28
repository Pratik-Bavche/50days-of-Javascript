
const countChar=(str,ch)=>{
    let c=0;
    for(i=0;i<str.length;i++)
    {
        if(str.charAt(i)==ch) c++;
    }
    return c;
}




console.log(countChar("Praaaaaaatik",'a'))