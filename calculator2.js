"use strict";

//grab elements
const firstInput = document.getElementById("input-1");
const secondInput = document.getElementById("input-2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract"); 
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const results = document.getElementById("results");
const resetButton = document.getElementById("reset");

//add listeners
addButton.addEventListener("click", run);
subtractButton.addEventListener("click", run);
multiplyButton.addEventListener("click", run);
divideButton.addEventListener("click", run);
resetButton.addEventListener("click", run);


//When the user performs one of the operations, 
//output the result to another DOM element of your choice.
function printResult(result){

    results.innerHTML = `<h2> the result is: </h2>
                         <p> ${result} </p>`;

}

//helper to clear inputs and display
function clear(){
    window.location.reload(true);
}

function getA(){
    return parseInt(firstInput.value)
}

function getB(){
    return parseInt(secondInput.value)
}

function getOp(e){
    return e.currentTarget.id; 
}


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

let multiply = function(a,b){
    return a * b;
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 
 let add = function(a, b){
    return a + b;
 }

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

let subtract = function(a, b){
    return a - b;
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

let divide = function(a, b){
    return a / b;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function math(a, b, op){
    return op(a,b);
}

function caller(a,b,op){

    switch(op){
        case "add": 
            return math(a, b, add);
        case "subtract": 
            return math(a, b, subtract);
        case "multiply": 
            return math(a, b, multiply);
        case "divide": 
            return math(a, b, divide);
        }
}

function run(e){

    let a = getA();
    let b = getB();
    let op = getOp(e);
    let answer = caller(a,b,op);

}




