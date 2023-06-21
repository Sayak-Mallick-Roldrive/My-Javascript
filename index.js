const cars = ["Mercedes", "BMW", "Audi"]; // simple Array

// const names = new Array("Sayak", "Sayan", "Shubhajit"); //using new keyword

console.log(cars[1]);  // accessing array elements

cars[1] = "Tata"; // Changing array elements
console.log(cars);

console.log(cars.length);

console.log(cars[0]);

console.log(cars[cars.length-1]);

for (let i=0; i< cars.length; i++ ) {
    console.log("Array Element: " + cars[i]);
}

console.log(cars.at(2))

const arr1 = ["Price","Ghost"];
const arr2 = ["Soap", "Rudolfo", "Alehendro"];

const COD = arr1.concat(arr2);
console.log(COD);


const arr3 = ["Alex", "Gaz"];

const TF141 =  arr1.concat(arr2, arr3);
console.log(TF141);


console.log(TF141.constructor);

console.log(arr2.copyWithin(2,0,2))


const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(consoleItem);

function consoleItem(item,index, arr) {
    console.log('a['+ index + '] = '+ item)
}

numbers.forEach((item, index, arr) => {
    console.log('a[' + index + '] = '+ item);  //using callback function
})

let sum = 0;

numbers.forEach((item) => {
    sum += item;
});

console.log(sum);

const double = numbers.map((value) => {
    return value * 2;
})

const multiply = numbers.map((value, index) => {
    return value * index;
})

console.log(double);
console.log();
console.log(multiply);


const products = [
    {
        name:'laptops',
        price:20000,
        quantity:5
    },
    {
        name:'desktop',
        price:35000,
        quantity:15
    },
    {
        name:'ipods',
        price:2000,
        quantity:3
    },
]

const totalvalues = products.map((item) => (
    {
    name:item.name,
    total:item.price * item.quantity
    }
));

console.log(totalvalues);

const even = numbers.filter((value) => {
    return value % 2 == 0;
})

console.log(even)


const people = [
    {
        name:"Price",
        age: 25
    },
    {
        name:"Ghost",
        age: 15
    },
    {
        name:"Alex",
        age: 18
    },
]

const adults = people.filter(person => person.age >= 18);

console.log(adults);


const numbers1 = [1,2,3,4,1,2,3,2,2,2,3,3,];

const nums = numbers1.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
})

console.log(nums);

const total = numbers.reduce((accumulator, value) => {
    return accumulator + value;
});


console.log(total);
