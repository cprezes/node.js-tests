function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator
// the line above logs to the console: Your response is "Hello Udacity Student"!
iterator.next("Another one expresion");


function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name); 
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;
print() ;
// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value; 
print() ;
// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value; 
print() ;
// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value; 
print() ;
// you get the idea
name = generatorIterator.next(`${name} is rad!`).value; 
print() ;
name = generatorIterator.next(`${name} is impressive!`).value;
print() ;
name = generatorIterator.next(`${name} is stunning!`).value;
print() ; 
name = generatorIterator.next(`${name} is awe-inspiring!`).value;
print() ;
// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value; 
console.log(positions);
// displays each name with description on its own line
positions.join('\n');
console.log(positions);

printIterator(positions);


function print(){
    console.log(name);
}





function printIterator(list){
    for (let value of list) {
        console.log(value);
      }
}
