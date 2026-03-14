validate=(str)=>{
    str=str.replaceAll(' ','')
    let revNo="";
    for(i=str.length-1;i>=0;i--) revNo=revNo+str[i];        
    let arr=revNo.split('');
    arr=arr.map((no,ind)=>ind%2==1?no*2:no)
    arr=arr.map((no)=>no>9?no-9:no)
    arr = arr.reduce((prev, curr) => prev + Number(curr), 0);
    return arr%10===0;
}



console.log(validate("1234 5678 7654 2673"));