
const findMax=(arr)=>{
    let mx=0;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]>mx) mx=arr[i];
    }
    return mx;
}


console.log(findMax([1,6,-3,5,2,1]))