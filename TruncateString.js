
const truncateString=(str,c)=>{
    if(str.length>c)
    {
        return str.substring(0,7)+"...";
    }
    return str;
}





console.log(truncateString("Pratik Bvcahe PAtil",7))