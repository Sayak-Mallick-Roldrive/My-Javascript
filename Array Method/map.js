const numbers = [1,2,3,4,5,6,7,8,9];

const double = numbers.map((value) => {
    return value * 2;
});

console.log(double);

const multiply = numbers.map((value, index) => {
    return value * index;
})

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

const totalvalue = products.map((item) => (
    {
        name: item.name,
        total:item.price * item.quantity
    }

    ));

console.log(totalvalue);
