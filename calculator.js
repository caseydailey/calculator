console.log('files are linked');

//grab elements form the DOM

const firstInput = document.getElementById("input-1");
const secondInput = document.getElementById("input-2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract"); 
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const results = document.getElementById("results");
const resetButton = document.getElementById("reset");

let a = "";
let b = ""; 

//put an event listener on each of the buttons

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
resetButton.addEventListener("click", reset);


//When the user performs one of the operations, 
//output the result to another DOM element of your choice.

function printResult (result) {

	resultString = `<h2> the result is: </h2>
			  <p> ${result} </p>`;

	results.innerHTML = resultString;
}

function reset() {
	window.location.reload(true);
}

function setValues() {

	a = parseInt(firstInput.value);
	b = parseInt(secondInput.value);
}

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */


function multiply () {

	console.log('multiply wants to run');

	setValues();

	console.log('a:', a);
	console.log('b:', b);

	let product = a * b;

	console.log('product:', product);

	printResult(product);	
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function add () {

	console.log('add wants to run');

	setValues();

	console.log('a:', a);
	console.log('b:', b);

	let sum =  a + b;

	console.log('sum:', sum);

	printResult(sum);
}


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtract () {

	console.log('subtract wants to run');

	setValues();

	console.log('a:', a);
	console.log('b:', b);

	let difference =  a - b;

	console.log('difference:', difference);

	printResult(difference);
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divide () {
	
	console.log('divide wants to run');

	setValues();

	console.log('a:', a);
	console.log('b:', b);

	let quotient =  a / b;

	console.log('quotient:', quotient);

	printResult(quotient);
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

/*function doMath(num1, num2, function) {
	return function(num1, num2);
}

doMath(2, 4, multiply);*/










