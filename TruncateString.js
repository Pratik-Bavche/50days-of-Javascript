
const truncateString=(str,c)=>{
    if(str.length>c && c!=0)
    {
        return str.substring(0,7)+"...";
    }
    return str;
}





console.log(truncateString("Pratik Bvcahe PAtil",0))