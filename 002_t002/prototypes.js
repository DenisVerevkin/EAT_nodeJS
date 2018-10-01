function Vehicle() {
}

Vehicle.prototype.move = function () {
  console.log('Abstract vehicle moving');
};

function Automobile(maxSpeed) {  
  this.maxSpeed = maxSpeed;
}
Automobile.prototype = Object.create(new Vehicle());
Automobile.prototype.move = function() {
  console.log('Abstract automobile moving');
}


function Audi(maxSpeed) {
  this.maxSpeed = maxSpeed;
}
Audi.prototype = Object.create(new Automobile());
Audi.prototype.move = function() {    
  console.log(`Audi car moving with maximum speed of ${this.maxSpeed}`);
}

function Airplan(maxSpeed) {
  this.maxSpeed = maxSpeed;
}
Airplan.prototype = Object.create(new Vehicle());
Airplan.prototype.move = function() {    
  console.log(`Airplan is moving with maximum speed of ${this.maxSpeed}`);
}

const veh = new Audi(260);
const airplan = new Airplan(800);
veh.move();
airplan.move();