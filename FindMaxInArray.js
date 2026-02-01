
const findMax=(arr)=>{
    let mx=0;
    // for(i=0;i<arr.length;i++)
    // {
    //     if(arr[i]>mx) mx=arr[i];
    // }


    //Using MAP
    // arr.map((i)=>i>mx?mx=i:0)


    //Using Reduce
    mx=arr.reduce((prev, curr) => curr > prev ? curr : prev);

    return mx;
}


console.log(findMax([1,6,-3,5,2,1]))