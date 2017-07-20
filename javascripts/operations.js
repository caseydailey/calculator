console.log("operations");


var Calculator = (function(calc){


    calc.multiply = function(a,b){
        return a * b;
    }


    calc.add = function(a, b){
        return a + b;
     }



    calc.subtract = function(a, b){
        return a - b;
    }


    calc.divide = function(a, b){
        return a / b;
    }



    calc.math = function(a, b, op){
        return op(a,b);
    }

    return calc;

})(Calculator || {});



