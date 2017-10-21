const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log("month size = " +  months.size);
console.log(months.has('September'));
console.log(...months);
const iterator = months.values();
console.log(iterator.next().value);
