//RE is a sequence of characters which is mainly used for pattern validation

extractNos=(str)=>{
    const regex=/\d+/g;
    return str.match(regex)
}



console.log(extractNos("abc123pqr456hrte876"))