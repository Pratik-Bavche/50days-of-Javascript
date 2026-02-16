const startWith=(str,check)=>{
//    return str.toLowerCase().startsWith(check.toLowerCase())

    // Using Slice
    return str.toLowerCase().slice(0,check.length)===check.toLowerCase()
}



console.log(startWith("Hello world","hello"))