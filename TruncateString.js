
const truncateString=(str,c)=>{
    // if(c<=0) return str;
    // if(str.length>c)
    // {
    //     return str.substring(0,7)+"...";
    // }

    return (c<=0)?str:str.substring(0,7)+"...";
}





console.log(truncateString("Pratik Bvcahe PAtil",-7))