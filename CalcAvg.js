

const calcAvg=(arr)=>{
    if(arr.length==0) return false;

    sum=arr.reduce((prev,curr)=>prev+=curr)

    return sum/arr.length;
}


console.log(calcAvg([5,10,2,8]))