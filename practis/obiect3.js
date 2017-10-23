function greet(name, greeting) {
    name = (typeof name !== 'undefined') ?  name : 'Student';
    greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';
  
    return `${greeting} ${name}!`;
  }
  
  console.log( greet()); // Welcome Student
  console.log(greet('James')); // Welcome James!
  console.log(greet('Richard', 'Howdy')); // Howdy Richard!
  
  function greet1(name = 'Student', greeting = 'Welcome') {
    return `${greeting} ${name}!`;
  }
  
  console.log( greet1()); // Welcome Student!
  console.log(greet1('John')); 
  console.log(greet1('Red', 'Socks')); 


  function shippingLabel(name, address) {
    name = (typeof name !== 'undefined') ? name : 'Richard';
    address = (typeof address !== 'undefined') ?  address : 'Mountain View';
    return `To: ${name} In: ${address}`;
  }

  console.log(shippingLabel());
