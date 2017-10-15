const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

console.log("Modulo czyli po jeżeli zpodzielna przez 2 to omiń pentle")

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

console.log("Array.prototype.decimalfy = function")


Array.prototype.decimalfy = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

digits.push(12,23);

for (const digit of digits) {
  console.log(digit);
}