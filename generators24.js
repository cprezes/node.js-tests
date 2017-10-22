function * getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}

getEmployee();
  

//Notice the asterisk (i.e. *) right after the function keyword? That asterisk indicates that this function is actually a generator!
// return:  getEmployee {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}

const generatorIterator = getEmployee();
generatorIterator.next();