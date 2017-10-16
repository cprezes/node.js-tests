function greet(name, greeting) {
    name = (typeof name !== 'undefined') ?  name : 'Student';
    greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';
  
    return `${greeting} ${name}!`;
  }
  
  console.log( greet()); // Welcome Student
  console.log(greet('James')); // Welcome James!
  console.log(greet('Richard', 'Howdy')); // Howdy Richard!
  
