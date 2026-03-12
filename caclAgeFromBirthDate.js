DOB=(date)=>{
    let today = new Date().getFullYear();
    let birthDate = new Date(date).getFullYear();
    let monthDiff = new Date().getMonth() - new Date(date).getMonth();
    if(monthDiff < 0 || (monthDiff === 0 && new Date().getDate() < new Date(date).getDate())){
        today--;
    }
    return today-birthDate;
}

console.log(DOB("2005-01-16"))