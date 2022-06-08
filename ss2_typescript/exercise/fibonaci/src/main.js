var start = 0;
var end = 1;
var fibonacciArray = [start, end];
var count = 20;
var currentFibonacci;
var sum = start + end;
function fibonacci(count) {
    for (var i = end + 1; i < count; i++) {
        currentFibonacci = end + start;
        start = end;
        end = currentFibonacci;
        fibonacciArray.push(currentFibonacci);
        sum += currentFibonacci;
    }
    return fibonacciArray;
}
// fibonacci(count).forEach(element =>{
//     console.log(element);
// })
// let temp = fibonacci(count).filter(element => element!=1)
// console.log(temp);
var temp = fibonacci(count).map(function (element) {
    if (element == 1) {
        element = 0;
    }
    return element;
});
console.log(temp);
console.log("Fibonacci Array: " + fibonacci(count));
console.log("Sum of " + count + " Fibonacci Array's first number: " + sum);
