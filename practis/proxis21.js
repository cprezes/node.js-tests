var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

console.log( agent.status); // returns 'looking for work'


let handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
 agent = new Proxy(richard, handler);
console.log( agent.status); // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)




//Accessing the Target object from inside the proxy

//If we wanted to actually provide the real result, we would need to return the property on the target object:

 richard = {status: 'looking for work'};
 handler = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];
    }
};
 agent = new Proxy(richard, handler);
 console.log( agent.status); // (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status



 richard = {status: 'looking for work'};
 handler = {
     set(target, propName, value) {
         if (propName === 'payRate') { // if the pay is being set, take 15% as commission
             value = value * 0.85;
         }
         target[propName] = value;
     }
 };
 agent = new Proxy(richard, handler);
 console.log(agent.payRate = 1000); // set the actor's pay to $1,000
 console.log( agent.payRate); // $850 the actor's actual pay