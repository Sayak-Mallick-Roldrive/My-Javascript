const ages = [19,22,5,44,50,65,99,43,92];

const check = ages.some((age) =>{
    return age >= 18;
})

console.log(check);
