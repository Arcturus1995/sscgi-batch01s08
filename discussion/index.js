// let name = "John Smith";
// console.log(name);

// let num1 = document.getElementById("num1");
// let num2 = document.getElementById("num2");
// let btn = document.getElementById("btn");

// onclick;

//Function
// Function in javascript are lines/ blocked of codes that tell our device/ application to perform a certain task when called/invoke
// Function declarations
//(function statement) define a function with the specified parameters
// parameters - are placeholders listed in a function declaration or

// variables - are name container for storing data values (used to store and manipulate data)

/* 

	Syntax 

			function functionName(){
			  code block (statement)
			
			}
				function keyword - use to define a javascript function
				functionName - name of the function
*/

function printName() {
  console.log("My name is Juan");
}
// invoked called - call a function
printName();

//declaredFunction(); it result in an error

// Function declaration vs expression

// function declarations can be created through function declarations by using the function keyword and adding a function name

// declared function are not executed immediately They are  " Save for later user", and will be executed later , when they are invoke (called upon)

declaredFunction(); // declared functions can be hoited

// Note: In JS hoisting is a behavior for certain variable and function to run or use them before declaration

function declaredFunction() {
  console.log("Declared function");
}

// function expressions are created by assigning a function to a variable

// Function expressions are anonymous, they are not given a name, they are assigned to a variable

// anonymous function - a function without a name, it cannot be hoisted

let anonymousFunction = function () {
  console.log("Anonymous function");
};

anonymousFunction();

let constFunc = function () {
  console.log("Const function");
};

constFunc(); // const function can't be re-assigned to a function without a name or function declaration.

constFunc = function () {
  console.log("Re-assigned const function");
};

constFunc();

// parameters and arguments
function printName(name) {
  console.log("My name is " + name);
}

printName("John Smith"); // arguments
// Function parameters are the variables that a function expects to receive when it is invoked
// function parameters - are declared inside the function declaration, they represent the input values that the function expects to receive
// "name" is called a parameter
// A parameter acts as a named variable
// containers that exists only inside of a function
// it is used to store information that is provided to a function when it is called/ invoked
// An argument is a value passed when invoking a function , this argument is then stored as the name of the parameter within the function

printName("Happy");

function argumentsFunction() {
  console.log(
    "This function was passed as an argument before the message was printed"
  );
}

function invokeFunction(argumentsFunction) {
  argumentsFunction();
}
// invokeFunction(argumentsFunction);
const message = invokeFunction(argumentsFunction);

// console.log(message); // undefined

// Object Oriented Programming (OOP)
// Programming style based on classes and objects, group data(properties) and methods (actions).

// Classes - a blueprint or template for creating objects
//objects - instances of a class.
// instance - refers to an object created  from a class or constructor function
// constructor is a special method used in a class to initialize objects.
// Methods - a blueprint or template for creating methods
// Actions - a blueprint or template for creating actions

// Basic instance
// This creates an object called person
const person = {
  name: "John Smith",
  age: 30,
  greet: function () {
    // this keyword refers to the object (person) that will be created when the action
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  },
};

person.greet();
class Person {
  constructor(name, age) {
    this.name = name; // initializing the 'name' property
    this.age = age; // initializing the 'age' property
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

// create instance using the constructor
const person1 = new Person("John Smith", 30);
const person2 = new Person("Jun", 17);

person1.introduce();
person2.introduce();

// without ES6 support

function Person1(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  };
}

// create instance using the constructor

const person3 = new Person1("John Smith", 30);
const person4 = new Person1("Jun", 17);

person3.introduce();
person4.introduce();

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  // methods
  driveTo(destination) {
    console.log(`Driving to ${destination}`);
  }
}

// create instance using the constructor

const myCar = new Car("Toyota", "Camry", 2021);
myCar.driveTo("New York");

class Pokemon {
  constructor(name, type, level, hp) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
  }

  attack(opponent) {
    console.log(
      `${this.name} attacks ${opponent.name} with a ${this.type} attack!`
    );
    let damage = this.level * 2;
    console.log(`${this.name} level up ${damage}`);
  }
  receivedDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      console.log(`${this.name} has fainted!`);
    } else {
      console.log(`${this.name} has ${this.hp} health left.`);
    }
  }
  heal(hp) {
    this.hp += hp;
    console.log(`${this.name} has been healed!`);
    if (this.hp > 100) {
      this.hp = 100;
    } else {
      console.log(`${this.name} has ${this.hp} health left.`);
    }
  }
}

class Trainer {
  constructor(name, pokemon) {
    this.name = name;
    // this.pokemon = pokemon;
    this.pokemonList = [];
  }
  addPokemon(pokemon) {
    this.pokemonList.push(pokemon);
  }
  selectPokemon(index) {
    return this.pokemonList[index];
  }
  // greet() {
  //   console.log(
  //     `Hello, my name is ${this.name}  My pokemon is ${this.pokemon.name}.`
  //   );
  // }
}

const pikachu = new Pokemon("Pikachu", "Electric", 5, 100);
const charmander = new Pokemon("Charmander", "Fireball", 5, 100);

let ash = new Trainer("ash");
ash.addPokemon(pikachu);

let brook = new Trainer("brook");
brook.addPokemon(charmander);
let ashPokemon = ash.selectPokemon(0);
let brookPokemon = brook.selectPokemon(0);

// ashPokemon.attack(brookPokemon);
// brookPokemon.receivedDamage(20);
// brookPokemon.attack(ashPokemon);
// ashPokemon.receivedDamage(25);
// ashPokemon.heal(10);

// abstraction it involves simplifying the complex system by exposing only the essential features
// class Battle {
//   constructor(trainer1, trainer2) {
//     this.trainer1 = trainer1;
//     this.trainer2 = trainer2;
//   }
//   startBattles() {
//     console.log(
//       `The battle between ${this.trainer1.name} and ${this.trainer2.name}`
//     );
//     while (this.trainer1.hp > 0 && this.trainer2.hp > 0) {
//       this.trainer1.attack(this.trainer2);
//       if (this.trainer2.hp > 0) {
//         this.trainer2.attack(this.trainer1);
//       }
//     }
//     if (this.trainer.hp <= 0) {
//       console.log(`${this.trainer1.name} has lost the battle!`);
//     } else {
//       console.log(`${this.trainer2.name} has lost the battle!`);
//     }
//   }
// }

// let battle = new Battle(ashPokemon, brookPokemon);
// battle.startBattles();

// inheritance
//extend the pokemon class into specific type of pokemon
// ElectricPokemon
// FirePokemon
//each subclass will inheret properties and methods from the base Pokemom class but can also have its own specific behavior
class ElectricPokemon extends Pokemon {
  constructor(name, level, hp) {
    // calling base class constructor
    super(name, "Electric", level, hp);
  }
  // polymorphism: override attack() method fpr electric pokemon
  attack(opponent) {
    console.log(`${this.name} uses Thunderbolt  attack on ${opponent.name}`);
    let damage = this.level * 3;
    opponent.receivedDamage(damage);
  }
}
class FirePokemon extends Pokemon {
  constructor(name, level, hp) {
    // calling base class constructor
    super(name, "Fire", level, hp);
  }
  // polymorphism: override attack() method fpr electric pokemon
  attack(opponent) {
    console.log(`${this.name} uses Fireball attack on ${opponent.name}`);
    let damage = this.level * 3;
    opponent.receivedDamage(damage);
  }
}
const Electricpokemon = new ElectricPokemon("Pikachu", 10, 100);

const Firepokemon = new FirePokemon("charmander", 10, 100);

Firepokemon.attack(Electricpokemon);

// polymorphism the ability of different classes to respond to the same method call in a way that is specific to their type. it allows one interface(method) to be used for a general class of action with each subclass implement the method in its own way.

/*  method overriding
	-subclasses ca provide their own specific implementation of the method that is already defined in the parent class.

	method overloading
		- multiple method with the same name can be defined with different parameters, dynamic method resolutions.
	
	dynamic method resolution
	- the method that gets called depends on the object's type (not the reference type), which is determined in runtime.
 */

// Encapsulation - refers to the building of data (properties) that methods (functions) that operate on the data within a single unit or class
