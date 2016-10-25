
//Recursive solution for the Fibonacci number.
var yourself = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        else {
            return this.fibonacci(n - 1) +
                this.fibonacci(n - 2);
        }
    }
};

//Loop solution for the Fibonacci number.
var yourself = {
   fibonacci : function(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        else {
            var a = 0;
            var b = 1;
            var f = 0;
            for(var i=2; i<=n; i++){
                f=a+b;
                a=b;
                b=f;
            }
            return f;
        }
    }
};
