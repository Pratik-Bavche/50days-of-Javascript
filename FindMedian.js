
const findMed=(arr)=>{
    arr.sort((a,b)=>a-b)
    let mid=Math.floor(arr.length/2);
    if(arr.length%2==0)
    {
        // console.log(arr)
        // console.log(mid)
        return arr[mid]+arr[mid-1];
    }
    else
    {
        return arr[mid]
    }
}






console.log(findMed([1,12,34,4,8,6,5]))