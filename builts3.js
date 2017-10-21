const sym1 = Symbol('apple');

const sym2 = Symbol('banana');
const sym3 = Symbol('banana');

console.log(sym2 === sym3);
console.log(sym1.toString());



const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.15 },
    'orange': { color: 'orange', weight: 170.097 }
  };

  const bow2 = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.151 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }
  };
  //Instead of adding another banana to the bowl, our previous banana is overwritten by 
  //the new banana being added to the bowl. To fix this problem, we can use symbols.
  console.log(bowl.banana.weight);
  console.log(bow2.banana.weight);

  const bow3 = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
  };


  console.log(bow3);

