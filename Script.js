"Use Strict";

// // constructor Function
// // we can't use Arrow Function
// // because it doesn't have it's own this keyword
// const Person = function (firstName, birthYear) {
//   // console.log(this);
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   // because then all instances will have this method even if they don't use it and it will decrease the speed of website instead we will use inheritense

//   //   this.calcAge = function () {
//   //     console.log(2022 - this.birthYear);
//   //   };
// };

// const iman = new Person("Iman", 1998);
// console.log(iman);

// // Steps :
// // 1. New {} (Empty Object) is created  === new Person() === person {}
// // 2. function is called, this = {}     === this.firstname , this.birthyear
// // 3. {} linked to prototype            === this.fistname = "Iman" && this.birthyear = 1998
// // 4. function automatically return {}  === retun Person {firstName: "Iman", birthYear: 1998}

// const jonas = new Person("Joans", 1991);
// const matilda = new Person("Matilda", 2004);

// console.log(jonas, matilda);

// // in fact in js the constructor is a represent the class ( classic OOP class )
// const jay = "jay";
// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// // iman.calcAge();

// // PROTOTYPES
// // All Functions in js automatically has a property called Prototype
// // so every object that we create from a contructor func has access to all methods and properties that we define on the contructors prototype property
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// iman.calcAge();

// Refactor the code to understand the ProtoType Functionality better
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const iman = new Person("Iman", 1998);
// const jonas = new Person("Jonas", 1991);

// iman.calcAge();
// jonas.calcAge();

// console.log(iman.__proto__);
// console.log(iman.__proto__ === Person.prototype);

// Point : here the Person is the ProtoType of iman and jonas but not it self
// you should read it reverse : iman is not the prototype of Person : Wrong !!!!!!
// console.log(Person.prototype.isPrototypeOf(iman));
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// Steps :
// 1. New {} (Empty Object) is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// Person.prototype.species = "Homo Sapiens";
// console.log(iman, jonas);
// console.log(iman.species, jonas.species);

// the hasOwnProperty() method work because the prototype chain
// it means the iman object doesnt have this method but the __prototype__ of iman object will inherit this method from the object.prototype.__prototype__ so it can use it
// console.log(iman.hasOwnProperty("firstName"));
// console.log(iman.hasOwnProperty("species"));

// console.log(iman.__proto__);
// console.log(iman.__proto__.__proto__); // object.prototype ( top of prototype chain)
// console.log(iman.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor);

// const arr = [3, 5, 1, 3, 4, 8, 7, 8, 4, 4, 4, 8, 8, 3, 3, 1, 1]; // [] === new Array
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__); // we go back on chain to object ( go up )

// ********************************************************************
// here we created a method inside the prototype of Array so all other arrays can use this method(function) , so the prototype of other arrays will inherit this method from the prototype of the Main Array Object
// but this is not a good idea
// reason 1 : maybe the main js team at a function with the same of ours so it will cause errors
// reason 2 : on a team this is a bad idea because maybe other devs do the same and it will add bugs
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());
// ********************************************************************

// const h1 = document.querySelector("h1");
// // protoType of H1
// console.dir(h1); // h1
// console.log(h1.__proto__); // HTMLHeadingElement
// console.log(h1.__proto__.__proto__); // HTMLElement
// console.log(h1.__proto__.__proto__.__proto__); // Element
// console.log(h1.__proto__.__proto__.__proto__.__proto__); // Node
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__); // EventTarget
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // Object
// console.log(
//   h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
// ); // Null

// ES6  Classes
// this way is look like the oop implementation in other languages but in background it will do what we did with prototypes
// this way is implemented for the programmer who have exp with oop in other langs (like me)

// class expression
// const PersonCl1 = class {};

// class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // all the methods that we create inside a class will be added to the prototype of the constructor
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const iman = new PersonCl("Iman", 1998);
// console.log(iman);

// iman.calcAge();

// console.log(iman.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// iman.greet();

// Important Points About Classes
// 1. Classes are NOT hoisted even if they declared ( it means we can't use them before they defined )
// 2. Classes are First-Class Citizens (means we can pass them to other functions and we can retund them in functions)
// 3. Classes are executed in strict mode

// Point : Using both class declaration and contrcutors way are ok to use but it depend on your personal preferences

// Point : the class way is better and cleaner ( i prefer classes too )

// Getter and Setter
// evey object can get getter and setter
// this methods get and set values

const account = {
  owner: "Iman",
  movements: [200, 530, 125, 740],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  // set methods need only one input property
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log("-----------------------------");
console.log(account.latest);

// if you had a regular method , you have to use it like this
// account.latest(500);
// otherwise like this
account.latest = 500;
console.log(account.movements);
console.log(account.latest);

class PersonCl2 {
  constructor(firstName, birthYear, fullName) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.fullName = fullName;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    // console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}

const iman = new PersonCl2("iman", 1998, "Iman Moahmmadi");
console.log(iman.age);
console.log(iman);
console.log(iman.__proto__);

console.log(iman.fullName);
console.log("-----------------------------");
// const walter = new PersonCl2("Walter", 1985, "Walter");
// walter.fullName;

// Static Methods
// Static Method is a kind of method that attached to a constructor and we can use them witout creating an object from them
// from is a static method that only available on Array Constructor
// console.log(Array.from(document.querySelectorAll("h1")));
// console.log(Number.parseFloat(12));

const Person = function (fistname, birthYear) {
  this.firstName = fistname;
  this.birthYear = birthYear;
};

const imanP = new Person("Iman", 1998);
console.log("-----------------------------");
console.log(imanP);

// creating static methods for person class ( Person class is actully is a constructor accourding to js nature )

Person.hey = function () {
  console.log("Hey there 🖐🖐");
  console.log(this);
};

Person.hey();
// Error , we can't use hey here because it's not in the prototype of the iman object , it's just inside the Person Contructor (Class)
// iman.hey();

// Adding Static Method to a Class --->
class PersonCl3 {
  constructor(firstName, birthYear, fullName) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.fullName = fullName;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    // console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // static
  static hey() {
    console.log("Hey there 🖐🖐");
    console.log(this);
  }
}

PersonCl3.hey();
console.log("-----------------------------");
// Object.Create // and easy way
console.log("-----------------------------");
const PersonProto = {
  caclAge2() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2004;
steven.caclAge2();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

// Better Way
const sara = Object.create(PersonProto);
sara.init("Sara", 2006);
sara.caclAge2();

// inheritance Between Clasess: construtor functions
const PersonCC = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonCC.prototype.calcAgeCC = function () {
  console.log(2022 - this.birthYear);
};

const StudentCC = function (firstName, birthYear, course) {
  // Wrong Way : here the this keyword become undefined
  // PersonCC(firstName, birthYear);
  // Correct Way
  PersonCC.call(this, firstName, birthYear);
  this.course = course;
};

// the placement of this line is important
//wrong way
// it will cause a wrong prototype chain : watch Video if you dont get it
// StudentCC.prototype = PersonCC.prototype;
// Correct way
// here we insert the student prototype inside the prototype chain of Person prototype , so this way we will access to the this keyword and properties , method , etc of person
// also in the wrong way we wont inherit from the person but we change the prototype of student to person
// LINKING PROTOTYPES
StudentCC.prototype = Object.create(PersonCC.prototype);

StudentCC.prototype.introduce = function () {
  console.log(`My Name is ${this.firstName} and I Study ${this.course}`);
};

const Iman = new StudentCC("Iman", 1998, "Computer Science");
Iman.introduce();
Iman.calcAgeCC();

console.log(Iman.__proto__); // student
console.log(Iman.__proto__.__proto__); // Person
console.log(Iman.__proto__.__proto__.__proto__); // Object prototype
console.log(Iman.__proto__.__proto__.__proto__.__proto__); // Null

console.dir(StudentCC.prototype.constructor); // we have to fix that because this should be student

console.log(Iman instanceof StudentCC);
console.log(Iman instanceof PersonCC);
console.log(Iman instanceof Object);

StudentCC.prototype.constructor = StudentCC;
console.dir(StudentCC.prototype.constructor);

// Inheritance Between "Classes" ES6 Classes
class PersonCls {
  constructor(fullName, birthYear) {
    this.birthYear = birthYear;
    this.fullName = fullName;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    // console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // static
  static hey() {
    console.log("Hey there 🖐🖐");
    // console.log(this);
  }
}

class StudentCls extends PersonCls {
  constructor(fullName, birthYear, course) {
    // Alway nneds to happen first!!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My Name is ${this.fullName} and I Study ${this.course}`);
  }
  // here we override the parent class method
  caclAge() {
    console.log(`I'm ${2022 - this.birthYear} yeas old`);
  }
}

const imanCls = new StudentCls("Iman Mohammadi", 1998, "Computer Scinece");
console.log(imanCls);
imanCls.introduce();
imanCls.caclAge();
console.log("-----------------------------");
// Inheritence in Object.create();
const PersonProtoInh = {
  calcAgeInh() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const imanOC = Object.create(PersonProtoInh);

const StudentProto = Object.create(PersonProtoInh);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProtoInh.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My Name is ${this.firstName} and I Study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 1985, "Computer Science");
jay.introduce();
jay.calcAgeInh();

//
class AccountCl {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for Opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestloan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
    }
  }
}

const acc1 = new AccountCl("Iman", "dollar", 1741);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-100);
// acc1.movements.push(550);

acc1.deposit(250);
acc1.withdraw(120);

console.log(acc1);

// Pin Shouldn't be accessible
console.log(acc1.pin);

// we should be able to access the first One
// acc1.approveLoan(1000);
acc1.requestloan(10000);

////////
// Encapsulation
// To Avoid unwanted changes in datas
class AccountEnc {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property : this is not a real way : this just say to other devs in the that this data should not be used directly
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for Opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  depositEnc(val) {
    this._movements.push(val);
  }

  withdrawEnc(val) {
    this.depositEnc(-val);
  }

  _approveLoanEnc(val) {
    return true;
  }

  requestloanEnc(val) {
    if (this.approveLoan(val)) {
      this.depositEnc(val);
      console.log("Loan Approved");
    }
  }
}

const acc2 = new AccountEnc("iman", "EUR", 2511);

console.log("-----------------------------");
acc2.depositEnc(250);
acc2.withdrawEnc(120);
console.log(acc2.getMovements());
console.log("-----------------------------");

// Private classes
console.log("-----------------------------");

///////
///////

// 1) Public Fields
// 2) Private Fields
// 3) Public Methods
// 4) Private Methods
// there are 8
// the other 4 are static version of this 4
// 5) Public static Fields
// 6) Private static Fields
// 7) Public static Methods
// 8) Private static Methods

// Private classes will be available soon
class AccountEnc1 {
  // Public fields (Instances)
  locale = navigator.language;

  // Private Fields (Instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property : this is not a real way : this just say to other devs in the that this data should not be used directly
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for Opening an account, ${owner}`);
  }

  // Public interface
  // Public Methods
  getMovements1() {
    return this.#movements;
  }

  depositEnc1(val) {
    this.#movements.push(val);
  }

  withdrawEnc1(val) {
    this.depositEnc(-val);
  }

  requestloanEnc1(val) {
    if (this.#approveLoanEnc1(val)) {
      this.depositEnc(val);
      console.log("Loan Approved");
    }
  }

  static helper() {
    console.log("Helper");
  }

  // Private Methods
  #approveLoanEnc1(val) {
    return true;
  }
}

const benhruz = new AccountEnc1("behruz", "Rial", 1111);
console.log(benhruz);

// console.log(benhruz.#movements);
// console.log(benhruz.#pin);
// console.log(benhruz.#approveLoanEnc1(100));
AccountEnc1.helper();

// Chainig Methods

class Account1 {
  // Public fields (Instances)
  locale = navigator.language;

  // Private Fields (Instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for Opening an account, ${owner}`);
  }
  getMovementsA1() {
    return this.#movements;
  }

  depositA1(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawA1(val) {
    this.depositA1(-val);
    return this;
  }

  requestloanA1(val) {
    if (this.#approveLoanA1(val)) {
      this.depositA1(val);
      console.log("Loan Approved");
      return this;
    }
  }
  static helper() {
    console.log("Helper");
  }
  #approveLoanA1(val) {
    return true;
  }
}

const acc3 = new Account1("Iman", "Rial", 1741);
acc3
  .depositA1(300)
  .depositA1(500)
  .withdrawA1(35)
  .requestloanA1(25000)
  .withdrawA1(4000);

console.log(acc3.getMovementsA1());
