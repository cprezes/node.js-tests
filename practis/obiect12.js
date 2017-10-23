class Dessert {
    constructor(calories = 250) {
      this.calories = calories;
    }
  }
  
  class IceCream extends Dessert {
    constructor(flavor, calories, toppings = []) {
      super(calories);
      this.flavor = flavor;
      this.toppings = toppings;
    }
    addTopping(topping) {
      this.toppings.push(topping);
    }
    getTopping(){
        return this.toppings;
    }

  }
  

let run =new IceCream().addTopping(23);


 console.log();