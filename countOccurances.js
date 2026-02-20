
const nums=[1,2,3,4,5,3,2,1,4];

const counts={};

for(let no of nums)
{
    counts[no]=(counts[no] || 0)+1;
}

console.log(counts)