
/* Spread operator

The spread operator, written with three consecutive dots ( ... ), is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.

Let’s take a look at a few examples to see how it works */

const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);



const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

/* 
Combining arrays with concat

One example of when the spread operator can be useful is when combining arrays.

If you’ve ever needed to combine multiple arrays, prior to the spread operator, you were forced to use the Array’s concat() method. */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
let produce = fruits.concat(vegetables);
console.log(...produce);

