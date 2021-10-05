console.clear();
/*
  ES2015/ES6 (ECMA Script) introduces the Class Syntax that provides a Easier & Cleaner Syntax to write Classes
  This Syntax is similar to Java & C++ but in the background its' still based on Prototypes & Gets Converted to Prototypal Inheritance Models

  Person & Teacher Example using Class:
*/
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi, I'm ${this.name.first} ${this.name.last}`);
  }

  farewell() {
    console.log(`${this.name.first} ${this.name.last} has just left the building. Bye Bye, for now!!`);
  }
}

let han = new Person("Han", "Solo", 25, "male", ["Smuggling"]);
han.greeting();

let leia = new Person("Leia", "Organa", 19, "female", ["Government"]);
leia.farewell();

/*
  Inheritance + Getters & Setters
  Achieving Inheritance in this way i sas easy as writhing:
  class child extends parent {}

  Getters & Setters work in pairs.
  Getter return the current value of a variable &
  Setter change the value of the variable to the one it defines

  Usually for the Getter & Setter the actual property is named starting with a "_"
  giving same name to the getter/setter & variable will cause an error

  we also completely stop the access of the variable & rely just on getters/setters
  by creating private properties. Private properties are created using # within the class
  These can only be accessed within the class.
*/
class Teacher extends Person {
  #subject;
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    this.#subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this.#subject;
  }
  set subject(subject) {
    this.#subject = subject;
  }
}

let snape = new Teacher("Severus", "Snape", 58, "male", ["Potions"], "Dark arts", 5);
snape.greeting();
snape.farewell();
snape.age;
snape.subject;
console.log(snape.subject);
snape.subject = "Dark Magic, Baby";
console.log(snape.subject);

console.log(Person);
console.log(Teacher);

/*
  Because of the way JavaScript works, with the prototype chain, etc.,
  the sharing of functionality between objects is often called delegation.
  Specialized objects delegate functionality to a generic object type.
*/
