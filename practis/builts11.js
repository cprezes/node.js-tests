let flavor1 ={ flavor: 'chocolate' };
let flavor2 ={ flavor: 'another' };

let uniqueFlavors= new WeakSet([]);

uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);


console.log(uniqueFlavors)

