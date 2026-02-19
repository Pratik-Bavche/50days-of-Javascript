
const findMed=(arr)=>{
    arr.sort((a,b)=>a-b)
    if(arr.length%2==0)
    {
        // console.log(arr)
        let mid=Math.floor(arr.length/2);
        return arr[mid]+arr[mid-1];
    }
    else
    {
        return arr.reduce((prev,curr)=>prev+curr)/arr.length
    }
}






console.log(findMed([1,12,34,4,5,6,7]))