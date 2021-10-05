console.clear();
/*
  Prototypes are the mechanism by which JS Objects inherit features
  from one another.

  JS is defined as a Prototype-Based Language - to provide inheritance,
  objects can have a Prototype Object, which acts as a template object that it inherits methods & properties from.

 An Object's prototype may have a prototype object, from which it inherits methods & properties.
 This is known as Prototype Chain.

 In JavaScript, a link is made between the object instance and its prototype 
 (its __proto__ property, which is derived from the "prototype" property on the constructor), 
 and the properties and methods are found by walking up the chain of prototypes.

 Super Parent of All Objects in JS is the Object itself, i.e., all objects prototype chain ends at Object()
 it have a few properties in it's prototype like: toString(), valueOf(), hasOwnProperty(), isPrototypeOf(), toLocalString() & propertyIsEnumerable()

 Prototype is like an empty space to keep all properties & methods that can be inherited by other objects.
 Only the properties that are defined under prototype are inherited by other Objects.
 Anything defined within the Object itself is never inherited, those properties & methods are available just on the Object's Constructor.
*/

function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function () {
    var string = this.name.first + " " + this.name.last + " is " + this.age + " years old. ";
    var pronoun;

    if (this.gender === "male" || this.gender === "Male" || this.gender === "m" || this.gender === "M") {
      pronoun = "He likes ";
    } else if (this.gender === "female" || this.gender === "Female" || this.gender === "f" || this.gender === "F") {
      pronoun = "She likes ";
    } else {
      pronoun = "They like ";
    }

    string += pronoun;

    if (this.interests.length === 1) {
      string += this.interests[0] + ".";
    } else if (this.interests.length === 2) {
      string += this.interests[0] + " and " + this.interests[1] + ".";
    } else {
      for (var i = 0; i < this.interests.length; i++) {
        if (i === this.interests.length - 1) {
          string += "and " + this.interests[i] + ".";
        } else {
          string += this.interests[i] + ", ";
        }
      }
    }

    console.log(string);
  };

  this.greeting = function () {
    console.log("Hi! I'm " + this.name.first + ".");
  };
}
let person1 = new Person("Tammi", "Smith", 32, "neutral", ["music", "skiing", "kickboxing"]);

/*
 prototypes in browsers can be accessed using __proto__ property
 we can also use the Object.getPrototypeOf(createdObject);
*/
console.log(person1.__proto__, person1.__proto__.__proto__);
console.log(Object.getPrototypeOf(person1), Object.getPrototypeOf(Object.getPrototypeOf(person1)));

/*
  We use the "prototype" property to get & set the Prototype 

  prototype property is valid for just class/constructor functions & not the instance.
  person1.prototype is not a thing
*/
console.log(Person.prototype);
console.log(Object.prototype);
console.log(Number.prototype);
console.log(String.prototype);
console.log(Array.prototype);
console.log(Date.prototype);
/*
  Difference Between prototype property & __proto__/Object.getPrototypeOf()?
    
    prototype is an object where we define properties & methods to be inherited
    
    __proto__/Object.getPrototypeOf() points to the prototype object of the current object.
    It's used to lookup the prototype chain.
*/

/*
  The Object.create() can be used to create object instances.
  let person2 = Object.create(person1);
  what it actually does is that it creates a new object from a specified prototype object.
  in Above line person2 is being created using person 1 as a prototype object.

  used in this way it can be problematic since changes done to properties like name will reflect in both the objects

  Usually, Object.create() is used to create an object instance with prototype se to another object
        or used with null to create an object with null prototype
*/
let person2 = Object.create(person1);
console.log(person2.__proto__, person1.__proto__);

/*
  Every Constructor Function has a prototype property whose value is an object containing a constructor property.
  This constructor property points to the original function.
  Hence, the constructor property is available to all the instances of the constructor as well
    since its a function we can use it to create an instance of the Type.
    This can be done in a situation where we might not have direct access to the constructor & want to create a new instance
  
  Another use for constructor is to get the name of the constructor the object ia the instance of 
  using: instance.constructor.name
  In case of complex objects he constructor.name could change so it's better to use the instanceof operator
*/
console.log(person1.constructor === Person);
let person3 = new person1.constructor("Karen", "Stephenson", 26, "female", ["playing drums", "mountain climbing"]);
console.log(person3);
console.log(person3.constructor.name);
console.log(person3 instanceof Person);

/*
  Problem with defining functions in constructor functions is that all the functions are copied for every instance hence utilizing unnecessary space
  this problem can be solved using prototype
*/
Person.prototype.farewell = function () {
  // Setting prototype using an instance, just in case the Constructor is not directly accessible
  // person3.constructor.prototype.farewell = function() {
  // person3.__proto__.farewell = function() {
  console.log(`${this.name.first} has left the building. Bye for Now!`);
};

person1.farewell();
person3.farewell();
