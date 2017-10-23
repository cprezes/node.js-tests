const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}

console.log("const index in digits")
digits.push(25);

for (const index in digits) {
  console.log(digits[index]);
}

console.log("Array.prototype.decimalfy = function")


Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

for (const index in digits) {
  console.log(digits[index]);
}