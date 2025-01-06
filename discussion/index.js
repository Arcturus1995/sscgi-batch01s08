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
