let point = [10, 25, -34];

let x = point[0];
let y = point[1];
let z = point[2];

console.log(x, y, z);

const gemstone = {
    type: 'quartz',
    color: 'rose',
    karat: 21.29
  };
  
  const type = gemstone.type;
  const color = gemstone.color;
  const karat = gemstone.karat;
  
  console.log(type, color, karat);



 point = [10, 25, -34];
  
  [x, y, z] = point;
  
  console.log(x, y, z);


  let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
  let [first, second, third] = positions;
console.log(second);


const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let {radius, getArea, getCircumference} = circle;
console.log(radius,getArea,getCircumference);






