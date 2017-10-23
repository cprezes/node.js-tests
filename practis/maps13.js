const employees = new Map();
console.log(employees);

//Modifying Maps

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);

//To remove key-value pairs, simply use the .delete() method.



console.log( (employees.delete('julia@udacity.com'))  ? "Deleted":" No deleted") ;
//The .delete() method returns true if a key-value pair is successfully deleted from 
//the Map object, and false if unsuccessful. The return value of .set() is the Map object itself if successful.


employees.delete('richard@udacity.com');
console.log(employees);

//Again, similar to Sets, you can use the .clear() method to remove all key-value pairs from the Map.

 employees.clear()
console.log(employees);