const calcMode = (nums) => {
    let counts = {};
    let max = 0;
    let mode;

    for (let no of nums) {
        counts[no] = (counts[no] || 0) + 1;

        if (counts[no] > max) {
            max = counts[no];
            mode = no;
        }
    }

    return mode;
}

console.log(calcMode([1,2,3,2,3,12,3]));