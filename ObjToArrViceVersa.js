const obj={
    name:"Pratik Bavche",
    age:21,
    city:"pune"
}


///OBJECT TO ARRAY

let arr=Object.entries(obj)
console.log(arr.flat())


///ARRAY to OBJECT

let newObj=Object.fromEntries(arr);
console.log(newObj)