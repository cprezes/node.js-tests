

//After you’ve built your Map, you can use the .has() method to check if a key-value pair exists in your Map by passing it a key.

const members = new Map();


members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log((members.has('Xavier')) ? "Present": "Absent");
console.log(members.has('Marcus'));


//And you can also retrieve values from a Map, by passing a key to the .get() method.

console.log(members.get('Evelyn'));

let iteratorObjForKeys = members.values(); 
console.log( iteratorObjForKeys.next());

console.log(iteratorObjForKeys.next());

let iteratorObjForValues = members.values();
console.log(iteratorObjForValues.next());


for (const member of members) {
    console.log(member + " <= iterator");
  }

for (const member of members) {
    let [key,value] = member;
console.log(key,value+  " <= destruct mrthod ");
}


members.forEach((key, value) => console.log(key, value + " <==for Each "));