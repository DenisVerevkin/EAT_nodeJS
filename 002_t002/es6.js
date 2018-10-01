class Vehicle {
    constructor() {
    }
    
    move() {
      console.log('Abstract vehicle moving');
    }
  }
  
  class Automobile extends Vehicle {
    constructor(maxSpeed) {
      super();
      this._maxSpeed = maxSpeed;
    }
    
    get maxSpeed() {
      return this._maxSpeed;
    }  
    
    move() {
      console.log('Abstract car moving');
    }
  }
  
  class Audi extends Automobile {
    constructor(maxSpeed) {
      super(maxSpeed);
    }
    
    move() {    
      console.log(`Audi car moving with maximum speed of ${this.maxSpeed}`);
    }
  }
  
  // Sample
  const veh = new Audi(260);
  veh.move();