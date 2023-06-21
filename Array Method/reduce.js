const numbers = [1,2,3,4,5,6,7,8,9,10];

const sum = numbers.reduce((accumulator, item) => {
    return accumulator + item;
});

console.log(sum);
