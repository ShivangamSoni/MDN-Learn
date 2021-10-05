/*
// Creating Objects using Factory Functions. Creating and Returning an Object
function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function() {
    console.log('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}

const salva = createNewPerson('Salva');
console.log(salva.name);
salva.greeting();
*/

/*
// Creating Objects Using Constructor Functions

function Person(name) {
  this.name = name;
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
}

let person1 = new Person('Bob');
let person2 = new Person('Sarah');

person1.name;
person1.greeting();
person2.name;
person2.greeting();

console.log(person1, person2);
*/

/*
// Example
function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    // Initial Common Output String
    let output = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.'; 
    
    // Addition of He/She as per Gender
    if(this.gender.toLowerCase() === "male") {
      output += " He Likes";
    } else {
      output += " She Likes";
    }
    
    // Addition of Interests.
    let interestLen = this.interests.length;
    if(interestLen === 1){
      output += ` ${this.interests[0]}.`;
    } else {
      this.interests.forEach((value, index) => {
        if(index === interestLen-1){
          output += ` & ${value}.`;
        } else if(index === 0){
          output += ` ${value}`;
        } else {
          output += `, ${value}`;
        }
      });
    }

    console.log(output);
  };
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + '.');
  };
}

let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
console.log(person1);
person1.bio();
person1.greeting();

let person2 = new Person("Dwane", "Johnson", 50, "male", ["acting"]);
person2.bio();

let jeena = new Person("Jeena", "", 22, "female", ["Gaming", "Binge Watching Youtube", "Chatting", "Coding"]);
jeena.bio();

let rabecca = Object.create(jeena); // Basically creates a reference to old object hence any change to those values will reflect on both the objects
console.log(rabecca);
rabecca.name.last = "rabecca";

rabecca.bio();
jeena.bio();
*/

/*
  Factory Function: we pass the arguments to an function that returns an Object(). In this case the instance is of type Object & have just the Object() Prototype, hence inheritance is not there.
  Constructor Function: we use the "new" keyword to create an Object of a newly created Type. In this case there is a proper Prototype Chain & Inheritance.
  
  Problems with Factory Function:
    Any Object Methods in this case are copied, i.e., every object creation copies those methods. Hence, utilizing additional memory
    Since, every object has a personal copy of Methods, we cannot actually create reusable code, i.e., method modifications are needed to be done for every object
    Basically, there's no Inheritance. Every instance is a Object() & not the thing we intended it to be like: person
    There's no prototype chain the prototype is just the Object(). so, (Object.prototype === instance.__proto__) : true
    
    Fixes:
      1. defining methods in Objects Prototype.
          The problem with this fix is that since we are adding it to Object prototype, every object will not have access to this method & or property
      2. Create a Prototype object & then in the Factory function, instead of returning the {} we can create & return a Object created using Object.create(proto_obj);
          const myProto = {
            display() { return `This is, ${this.name}`};
          }

          function createPerson(name) {
            return Object.create(myProto, {
              name: {
                value: name
              }
            });
          }

          This is a better solution but still a lot more confusing & weird.   

  Class: Its a ES6 way of writing constructor Functions.
          This Makes it a bit easier to create Object Types & define their Prototypes
*/

// Create Object using class
