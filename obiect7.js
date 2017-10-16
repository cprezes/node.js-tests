
// constructor
function IceCream() {
    this.scoops =0;
  }
  
  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    setTimeout(function() {
      this.scoops++;
      console.log('scoop added!');
    }, 500);
  };
  
  const dessert = new IceCream();
  
  console.log(dessert.scoops);
  dessert.addScoop();
  dessert.scoops=60;
  console.log(dessert.scoops);



  // constructor
function IceCream1() {
    this.scoops = 0;
  }
  
  // adds scoop to ice cream
  IceCream1.prototype.addScoop = function() {
    const cone = this; // sets `this` to the `cone` variable
    setTimeout(function() {
      cone.scoops++; // references the `cone` variable
      console.log('scoop added!');
    }, 0.5);
  };
  
  const dessert1 = new IceCream1();
  dessert1.addScoop();
  console.log(dessert1.scoops);