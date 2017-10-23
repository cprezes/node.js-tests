
class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}


class Bicycle extends Vehicle {
   constructor(color = 'blue', wheels = 2,horn="honk honk"){
    super(color,wheels,horn) 
    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
}
}

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk