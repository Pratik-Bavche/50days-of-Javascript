calculateDays = (date1, date2) => {
    const d1 = new Date(date1);
    // console.log(d1)
    const d2 = new Date(date2); 
    const timeDiff = Math.abs(d2.getTime() - d1.getTime());
    return timeDiff/(24*60*60*1000);
}



console.log(calculateDays("2026-01-01","2026-03-10"))