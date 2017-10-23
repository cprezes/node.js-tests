function Plane(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }
  
  // methods "inherited" by all instances
  Plane.prototype.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
  };
  
  const richardsPlane = new Plane(1);
  richardsPlane.startEngines();
  
  const jamesPlane = new Plane(4);
  jamesPlane.startEngines();
   


  //use class

  class Planes {
    constructor(numEngines) {
      this.numEngines = numEngines;
      this.enginesActive = false;
    }
  
    startEngines() {
      console.log('starting engines…'  );
      this.enginesActive = true;
    }
   }
  let richardsPlanes = new Planes(1);
  richardsPlane.startEngines();
  
  let jamesPlanes = new Planes(4);
  jamesPlane.startEngines();