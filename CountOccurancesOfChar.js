
const countChar=(str,ch)=>{
    str=str.toLowerCase();
    ch=ch.toLowerCase();
    let c=0;


    //Using Reduce Method
    str=str.split("")

    str.reduce((prev,curr)=>{
        if(ch===curr) c++;
    })

    //using LOOP

    // for(i=0;i<str.length;i++)
    // {
    //     if(str.charAt(i)==ch) c++;
    // }
    return c;
}




console.log(countChar("PraaaaaaaaAatik",'a'))