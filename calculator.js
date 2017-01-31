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

	setValues();
	let product = a * b;
	printResult(product);	
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function add () {

	setValues();
	let sum =  a + b;
	printResult(sum);
}


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtract () {
	setValues();
	let difference =  a - b;
	printResult(difference);
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divide () {
	setValues();
	let quotient =  a / b;
	printResult(quotient);
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
 //let product = doMath(2, 3, multiply);

 function doMath(a, b, operation){

     let result = operation(a, b);
     return result;
 }

 // Calling the function to add 2 and 3






	//console.log('a:', a);
	// console.log('b:', b);
	// console.log('result:', result);



