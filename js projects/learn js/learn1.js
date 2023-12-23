///object's
console.log("///object's");
const myobj = {
  name: "luvin",
  language: "tamil",
};
console.log(myobj.name);
const myobj1 = {
  user: true,
  id: 15488,
  detials: {
    name: "luvin",
    department: "cse",
    year: 3,
  },
  history: ["hello", "hi", "then"],
  action: function () {
    return `user name is: ${this.detials.name}`;
  },
};
console.log(myobj1);
console.log(myobj1.action());
const vehicle = {
  mirrar: 2,
  engine: function () {
    return "vrrooom!!!";
  },
};
console.log(vehicle);
console.log(vehicle.engine());
const car = Object.create(vehicle);
console.log(car.engine());
console.log(car);
car.sheets = 5;
car.engine = function () {
  return "whoosh!!!";
};
console.log(car);
const tesla = Object.create(car);
console.log(tesla);
//keys and value's
const movie = {
  actor: "vijay",
  music: "Arr",
  director: "ravi",
  producer: "anbu",
  def: "hello",
};
console.log(movie);
console.log(movie.hasOwnProperty("def"));
delete movie.def;
console.log(movie);
console.log(Object.keys(movie.actor));
console.log(movie.hasOwnProperty("def"));
console.log(Object.values(movie));
for (let job in movie) {
  console.log(`${job} is: ${movie[job]}`);
}
///destructuring the object
//1
//const{music:myFavmusicDirector} = movie;
//console.log(myFavmusicDirector);
//2
//const{actor:myFavActorDirector, producer:valDefault} = movie;
//console.log(myFavActorDirector);
//console.log(valDefault);
//3
//const{actor,music, director, producer} = movie;
//console.log(actor);
//4
function sings(music) {
  return music;
}
console.log(sings(movie));

function sings({ music }) {
  return music;
}
console.log(sings(movie));
///class
console.log("///clsss");
//1
const product = {
  size: "medium",
  performance: "high1",
  processing: function () {
    return console.log(
      `product size is ${this.size} but process is ${this.performance}`
    );
  },
};
product.processing();
//2
class product1 {
  constructor() {
    (this.size = "medium"), (this.performance = "high2");
  }
  processing() {
    return console.log(
      `product size is ${this.size} but process is ${this.performance}`
    );
  }
}
const procc = new product1();
console.log(procc);
procc.processing();
///3 eacy implimentation of custom development templet type script
class product2 {
  constructor(prType, processType) {
    this.size = prType;
    this.performance = processType;
  }
  processing() {
    return console.log(
      `product size is ${this.size} but process is ${this.performance}`
    );
  }
}
const procc1 = new product2("medium", "ultra3");
console.log(procc1);
procc1.processing();
///4
/////get set method

class product3 {
  constructor(prType, processType) {
    this.size = prType;
    this.performance = processType;
    this.unit = [];
  }
  getMethod() {
    return this.unit;
  }
  setMethod(productUnit) {
    return this.unit.push(productUnit);
  }
  processing() {
    return console.log(
      `product size is ${this.size} but process is ${this.performance} and that was run unit ${this.unit}`
    );
  }
}
const procc2 = new product3("medium", "ultra");
procc2.setMethod("one");
procc2.setMethod("Secound4");
procc2.setMethod("thired");
procc2.setMethod("fourth");
procc2.setMethod("fifth");
procc2.setMethod("sixth");
console.log(procc2.getMethod());
procc2.processing();
///////////////
//5
class product4 {
  constructor(prType) {
    this.size = prType;
    this.performance = "large";
  }
  getPerr() {
    return this.performance;
  }
  setMethod(performanceIn) {
    this.performance.push(performanceIn);
  }
}
class myproduct4 extends product4 {
  constructor(prType) {
    super(prType);
    this.unit = "one";
  }
  slice() {
    console.log(
      `our product ${this.size} perfomence ${this.performance} this unit ${this.unit}`
    );
  }
}
const procc3 = new myproduct4("smale");
console.log(procc3);
procc3.slice();

//////////////
///6
//anuthe type of example
class product5 {
  constructor(prType) {
    this._size = prType;
    this._performance = "large";
  }
  getPerr() {
    return this._performance;
  }
  setMethod(performanceIn) {
    this._performance.push(performanceIn);
  }
}
//this is used to made function() but exact woring princeple is class()
//also that function act like a class()
function product6(prType) {
  const size = prType;
  const performance = "large";
  return {
    run() {
      console.log(
        `2our product ${this.size} perfomence ${this.performance} this unit ${this.unit}`
      );
    },
  };
}
const runing = product6("smale");
runing.run();
/////////////////////
///7
class product7 {
  performance = "large";
  #unit = "one";
  constructor(prType) {
    this.size = prType;
  }
  getPerr() {
    return this.performance;
  }
  setMethod(performanceIn) {
    this.performance.push(performanceIn);
  }
  fun() {
    return console.log(
      `8th our product ${this.size} perfomence ${this.performance} this unit ${
        this.#unit
      }`
    );
  }
}
const pr1 = new product7("ultra");
pr1.fun();
console.log(pr1.getPerr());
console.log(pr1);
///////////json    text formate
////covert js to json
console.log("///json java script text notation");
const jsfunEx = {
  name: "hello",
  id: 9980,
  form: "normal",
};
///json conversion
const convert = JSON.stringify(jsfunEx);
console.log(convert);
///js conversion
const convertjs = JSON.parse(convert);
console.log(convertjs);
///////////////////error hendling
console.log("///error hendling");
("use strict"); ///this is the mode it is strict the all js condisions
//example
//val3 = "hello" this is a error don't spicyfy the data type let, const or var
//console.log(val3);///anuther function of error heandeling
const fun6 = () => {
  try {
    //const name = "hello";
    //name = "hiiii!!";
    //throw new coustumError("this is invalid function".stack);
    throw new Error("this is invalid function")
  } catch (err) {
    ///error finding methods
    console.log(err);
  }
  /*    console.table(err);
        console.error(err.stack);
        console.log(err);
        console.trace(err);
        console.error(err.name);
        console.log(err.name);
        logTheError(err.stack);
*/
};
fun6();
//custome error throwing
function coustumError(massage) {
  this.massage = massage;
  this.errorType = "couwstome";
  this.stack = `${this.errorType} :${this.massage}`;
}
