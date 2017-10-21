class Tree {
    constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
      this.size = size;
      this.leaves = leaves;
      this.leafColor = null;
    }
  
    changeSeason(season) {
      this.leafColor = this.leaves[season];
      if (season === 'spring') {
        this.size += 1;
      }
    }
  }
  
  class Maple extends Tree {
    constructor(syrupQty = 15, size, barkColor, leaves) {
      super(size, barkColor, leaves);
      this.syrupQty = syrupQty;
    }
  
    changeSeason(season) {
      super.changeSeason(season);
      if (season === 'spring') {
        this.syrupQty += 1;
      }
    }
    gatherSyrup() {
        this.syrupQty -= 3;
      }
    }
    
    const myMaple = new Maple(15, 5);
    console.log( myMaple.syrupQty);
    myMaple.changeSeason('fall');
    console.log( myMaple.syrupQty);
    myMaple.gatherSyrup();
    console.log( myMaple.syrupQty);
    console.log( myMaple.leafColor);
    myMaple.changeSeason('spring')
    console.log( myMaple.syrupQty);
    console.log( myMaple.leafColor);



    