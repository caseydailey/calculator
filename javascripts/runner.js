console.log("runner");

var Calculator = (function(calc){


        function printResult(a,b,op,result){

            let verb;
            switch(op){
                case "add":
                    verb = "plus";
                    break;
                case "subtract":
                    verb = "minus";
                    break;
                case "multiply":
                    verb = "times";
                    break;
                case "divide":
                    verb = "divided by";
                    break;
            }
            
            results.innerHTML = `<h2> ${a} ${verb} ${b} is: ${result}</h2>`;
                                
        }

        let inputs = Calculator.getInputs();

        //helper to clear inputs and display
        calc.clear = function(){
            window.location.reload(true);
        }

        //get input values
        function getA(){
            return parseInt(inputs[0].value);
        }

        function getB(){
            return parseInt(inputs[1].value);
        }

        //determine operation returns string of corresponding button's id
        function getOp(e){
            return e.currentTarget.id; 
        }

        //generic function takes (number, number, and operation)
        function math(a, b, op){
            return op(a,b);
        }

        //determine which function to call based on id (string) of button
        function caller(a,b,op){
            switch(op){
                case "add": 
                    return math(a, b, Calculator.add);
                case "subtract": 
                    return math(a, b, Calculator.subtract);
                case "multiply": 
                    return math(a, b, Calculator.multiply);
                case "divide": 
                    return math(a, b, Calculator.divide);
                }
        }

    //does all the things
    calc.run = function (e){

        let a = getA();
        let b = getB();

        if(isNaN(a) || isNaN(b)){
            alert("numbers only please.")
        } else {
        let op = getOp(e);
        let answer = caller(a,b,op);
        printResult(a,b,op,answer);
      }

    }
    
    return calc;

})(Calculator || {});

