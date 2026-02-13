
const findMin = (arr) => {
    // let less = Number.MAX_SAFE_INTEGER;

    // arr.map(curr => {
    //     if (curr < less) {
    //         less = curr;
    //     }
    // });

    // return less;

    //Using Reduce

    
    return arr.reduce((prev, curr) => prev < curr ? prev : curr);
    
    return arr.reduce((prev, curr) =>  Math.min(prev, curr));


};




console.log(findMin([5,2,34,2,1,3,4,6432,111]))