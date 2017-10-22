function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;
    }

    console.log('the function has ended');
}

//The Yield Keyword

//The yield keyword is new and was introduced with ES6. It can only be used inside
// generator functions. yield is what causes the generator to pause. Let's add yield to our generator and give it a try:


let generatorIterator = getEmployee();
generatorIterator.next();
generatorIterator.next();


function* getEmployee1() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}

 generatorIterator = getEmployee1();
console.log( generatorIterator.next().value);
console.log( generatorIterator.next().value);


function* udacity() {
    yield 'Richard';
    yield 'James'
}


generatorIterator = udacity(); 
console.log( generatorIterator.next().value);
console.log( generatorIterator.next());
console.log( generatorIterator.next());
console.log( generatorIterator.next());

