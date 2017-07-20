console.log("caller");


var Calculator = (function(calc){

    calc.callOp = function(a,b,op){
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
        };

    return calc;

})(Calculator || {});

