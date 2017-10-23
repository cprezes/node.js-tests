const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

sum(1, 2);
sum(10, 36, 7, 84, 90, 110);
sum(-23, 3000, 575000);

// Trochę dziwne że najperw robi funtiony

function sum() {
    let total = 0;  
    for(const argument of arguments) {
      total += argument;
    }
    newFunction(total);
  }

// Global scope

function newFunction(total) {
    //return total;
    console.log(total);
}



  function sum(...nums) {
    let total = 0;  
    for(const num of nums) {
      total += num;
    }
    console.log(total);
  }