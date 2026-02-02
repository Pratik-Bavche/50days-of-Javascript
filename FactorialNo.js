const factNo=(no)=>{
    let ans=1;
    for(i=1;i<=no;i++) ans*=i;

    return ans;
}

console.log(factNo(5))