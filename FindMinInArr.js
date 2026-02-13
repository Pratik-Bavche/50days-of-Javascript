
const findMin = (arr) => {
    let less = Number.MAX_SAFE_INTEGER;

    arr.map(curr => {
        if (curr < less) {
            less = curr;
        }
    });

    return less;
};




console.log(findMin([5,2,34,2,1,3,4,6432,111]))