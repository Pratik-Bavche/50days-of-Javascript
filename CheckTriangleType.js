
const checkTriangle=(a,b,c)=>{
    if (a===b && b===c) {
        return "Equilateral"
    } else if(a===b || a===c || b===c) {
        return "Isosceles"
    }
    else
    {
        return "Scalene"
    }
}




console.log(checkTriangle(3,3,3))
console.log(checkTriangle(3,4,3))
console.log(checkTriangle(3,4,6))