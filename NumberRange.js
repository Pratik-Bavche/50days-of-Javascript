const NoRange = (s, e) => {
    if (s > e) return [];   

    let arr = NoRange(s + 1, e);
    arr.unshift(s);
    return arr;
}

console.log(NoRange(0, 5));