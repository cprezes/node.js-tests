const digits = [0, 1, 2, 3];
for (const digit of digits) {
  console.log(digit);
}


const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());



const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185
};


 let iterator = Object.keys(james)[Symbol.iterator]();



 console.log(iterator.next().value); // 'James'
 console.log(iterator.next().value); // `5'10`
 
 iterator = Object.values(james)[Symbol.iterator]();

 console.log(iterator.next().value); // 185

 