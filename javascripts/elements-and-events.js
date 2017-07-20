console.log("element");


var Calculator = (function(calc){

        const firstInput = document.getElementById("input-1");
        const secondInput = document.getElementById("input-2");

        const addButton = document.getElementById("add");
        const subtractButton = document.getElementById("subtract"); 
        const multiplyButton = document.getElementById("multiply");
        const divideButton = document.getElementById("divide");

        const results = document.getElementById("results");
        const resetButton = document.getElementById("reset");


    calc.setEvents = function(){

        addButton.addEventListener("click", Calculator.run);
        subtractButton.addEventListener("click", Calculator.run);
        multiplyButton.addEventListener("click", Calculator.run);
        divideButton.addEventListener("click", Calculator.run);
        resetButton.addEventListener("click", Calculator.clear);


    }

    calc.getInputs = function(){
        return [firstInput, secondInput];
    }

return calc;

})(Calculator || {});

