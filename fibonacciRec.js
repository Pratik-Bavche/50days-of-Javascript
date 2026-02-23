const fibonacci = (no) => {
    if(no <= 1) return no;

    return fibonacci(no - 1) + fibonacci(no - 2);
}

console.log(fibonacci(5));  