// In fibonacci series, next number is the sum of previous two numbers 
// for example 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 etc. 
// The first two numbers of fibonacci series are 0 and 1.
class Fibonacci {
    fibonacci(n){
        if (!Number.isInteger(n)) {
            throw new Error('The Parameter must be an Integer!');
        }
        if (n < 0) {
            throw new Error('The Parameter must be positive!');
        } else if (n == 0) {
            return [0];
        } else if (n == 1)  {
            return [0, 1];
        } else if (n >= 2)  {

            let array = [0, 1];
            for (let i = 2; i < n + 1; i++){
                array.push(array[i - 2] + array[i - 1]);
            }
            return array;
            
        }
    }
}

module.exports = Fibonacci;
