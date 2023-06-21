const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach((item) => {
    console.log(item);
});

let sum = 0;

numbers.forEach((items) => {
    sum += items;
})

console.log(sum)


let letters = [1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,];
let count = {};

letters.forEach((item) => {
    if(count[item]){
        count[item]++;
    }
    else {
        count[item] = 1;
    }
})

console.log(count);
