// Arrays - variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5);
const fruits = ['apples', 'oranges', 'pears', 10, true];

fruits[3] = 'grapes';

fruits.push('mangos'); // Añade una variable al final del array
fruits.unshift('strawberries'); // Añade una variable al inicio del array
fruits.pop(); // Elimina la última variable del array

console.log(fruits);
console.log(fruits[0]);
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));
