const greet = name => `Witam ${name}!`;
console.log(greet('Prezes'));


// empty parameter list requires parentheses
let sayHi = () => console.log('Hello Udacity Student!');
sayHi();

sayHi = (student) => console.log('Hello Udacity ' + student + ' Student!');
sayHi("Prezes");

const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);


setTimeout(() => {
    console.log('Starting the test after 2000 ms');
    orderIceCream('chocolate', 'waffle');
}, 2000);

let upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
);

console.log(upperizedNames);

 upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
    name = name.toUpperCase();
    return `${name} has ${name.length} characters in their name`;
  });


  console.log(upperizedNames);

  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black'];
  const crazyColors = colors.map( color => color.split('').reverse().join('') + '!' );
  console.log(crazyColors);

  /*
 * Programming Quiz: Convert Function into an Arrow Function (2-1)
 */

// convert to an arrow function

  let squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(square) {
	return square * square;
});

console.log(...squares);
// convert to an arrow function
squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => num*num);

console.log(...squares);



// convert to an arrow function
squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(num){
    return num*num;
});

console.log(...squares);