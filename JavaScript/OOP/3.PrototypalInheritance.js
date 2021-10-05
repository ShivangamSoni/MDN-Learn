console.clear();
// Prototypal Inheritance
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.bio = function() {
  let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  let pronoun;

  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    pronoun = 'He likes ';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    pronoun = 'She likes ';
  } else {
    pronoun = 'They like ';
  }

  string += pronoun;

  if(this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if(this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    for(let i = 0; i < this.interests.length; i++) {
      if(i === this.interests.length - 1) {
        string += 'and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }

  console.log(string);
}

Person.prototype.greeting = function() {
  console.log(`Hi, I'm ${this.name.first}. ${this.name.first} ${this.name.last}.`);
}

Person.prototype.farewell = function() {
  console.log(`${this.name.first} ${this.name.last} has left the Building. Bye Bye, for Now!!!!`);
}

/*
  To Achieve Inheritance there are a few steps:
    1. calling the Parent Constructor in the current objects context using call() method
        Constructor.call(this, [relevant_arguments]);
        The first argument is value of "this" that you want to use when running the function
        For this example:
          Person.call(this, first, last, age, gender, interests);

    2. Setting child Constructors Prototype to Parents Prototype using Object.create(Parent.prototype)
        This sets the Child.prototype.constructor === Parent()
        For this example:
          Teacher.prototype = Object.create(Person.prototype);

    3. Correcting the Child constructor
        Now the previous step cause a problem as the constructor is changed
        To solve this we use the Object.defineProperty() method to set back the correct constructor
        For this example:
          Object.defineProperty(Teacher.prototype, "constructor", {
            value: Teacher,
            enumerable: false, // so that it does not appear in "for in" loop
            writable: true
          });
*/
function Teacher(first, last, age, gender, interests, subject){
  // Calling Parent Constructor
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}
// Setting Child Prototype to Parent Prototype
Teacher.prototype = Object.create(Person.prototype);
// Correcting the Child Constructor
Object.defineProperty(Teacher.prototype, "constructor", {
  value: Teacher,
  enumerable: false,
  writable: true
});

let t1 = new Teacher("Rebecca", "Ruth", 23, "f", ["Singing", "Gaming"], "Computer Programming");
console.log(t1);
t1.bio();

console.log(`Before Redefinition:`)
t1.greeting();
/*
  Redefining a Method in Child()
*/
Teacher.prototype.greeting = function() {
  let prefix;

  if(this.gender.toLowerCase() === "male" || this.gender.toLowerCase() === "m"){
    prefix = "Mr.";
  } else if(this.gender.toLowerCase() === "female" || this.gender.toLowerCase() === "f"){
    prefix = "Ms.";
  } else {
    prefix = "Mx.";
  }

  console.log(`Hello, My Name is ${prefix} ${this.name.first} ${this.name.last}\nand I Teach ${this.subject}.`);
};

console.log(`After Redefinition:`);
t1.greeting();

t1.farewell();

// Student Constructor
function Student(first, last, age, gender, interests) {
  Person.call(this, first, last, age, gender, interests);
}
Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, "constructor", {
  value: Student,
  enumerable: false,
  writable: true
});

Student.prototype.greeting = function() {
  console.log(`Yo! I'm ${this.name.first}`);
}

let s1 = new Student("James", "Charles", 10, "m", ["History", "Driving"]);
console.log(s1);
s1.bio();
s1.greeting();
s1.farewell();

console.log(Person);
console.log(Teacher);