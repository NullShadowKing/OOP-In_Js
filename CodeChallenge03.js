"Use Strict";

// const Car = function (company, speed) {
//   this.company = company;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   this.charge -= 1;
//   console.log(`${this.company} : is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.company} : is going at ${this.speed} km/h `);
// };

// const EV = function (company, speed, charge) {
//   Car.call(this, company, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeTo = function (amount) {
//   this.charge = amount;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   console.log(
//     `${this.company} : is going at ${this.speed} km/h and charge amount is : ${this.charge}%`
//   );
// };

// const EVCar = new EV("King", 120, 40);
// console.log("-----------------------------");
// console.log(EVCar);

// EVCar.accelerate();
// EVCar.accelerate();
// EVCar.accelerate();
// EVCar.brake();
// EVCar.brake();

// EVCar.chargeTo(90);

// console.log(EVCar);

// EVCar.accelerate();
// EVCar.accelerate();
// EVCar.accelerate();

// EVCar.accelerate();
// EVCar.accelerate();
// EVCar.accelerate();
// console.log("-----------------------------");

class CarCl {
  constructor(company, speed) {
    this.company = company;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.company} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.company} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

/////////////////////////////
/////////////////////////////

class EVCl extends CarCl {
  #charge;
  constructor(company, speed, charge) {
    super(company, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  EVAccelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.company} : is going at ${
        this.speed
      } km/h and charge amount is : ${this.#charge}%`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
rivian.chargeBattery(80);
console.log(rivian);
rivian
  .EVAccelerate()
  .EVAccelerate()
  .EVAccelerate()
  .brake()
  .EVAccelerate()
  .chargeBattery(95)
  .EVAccelerate()
  .EVAccelerate()
  .EVAccelerate();
console.log(rivian);

console.log(rivian.speedUS);
