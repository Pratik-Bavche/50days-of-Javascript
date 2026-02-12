const SumOfSqures=(arr)=>{
    sum=0;
    // for(let no of arr)
    // {
    //     sum+=no*no;
    // }
    // return sum;

    //using mapp
    arr.map((no)=>sum+=no*no)

    return sum;
}


console.log(SumOfSqures([1,2,4]))