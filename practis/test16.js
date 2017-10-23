function average(...nums) {
    let i = 0;
    let total = 0;

    for (const num of nums) {
        total += num;
        i++;
    }
    if (i === 0) {
        return total;
    }
    return total / i;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
