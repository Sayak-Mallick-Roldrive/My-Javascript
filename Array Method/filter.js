const numbers =  [1,2,3,4,5,,6,7,8,9,10,11,12,13,14,15,16];

const isEven = numbers.filter((value) => {
    return value % 2 == 0
});

console.log(isEven);

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
    }
]

const adult = people.filter((persons) => (
    persons.age >= 18
));

console.log(adult);

