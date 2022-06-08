let start: number = 0;
let end: number = 1;
let fibonacciArray: Array<number> = [start, end];
let count: number = 20;
let currentFibonacci: number;
let sum: number = start + end;
function fibonacci(count:number): Array<number> {
    for (let i=end+1; i<count; i++){
        currentFibonacci = end+start;
        start=end;
        end=currentFibonacci;
        fibonacciArray.push(currentFibonacci);
        sum+=currentFibonacci;
    }
    return fibonacciArray;
}

// fibonacci(count).forEach(element =>{
//     console.log(element);
// })
// let temp = fibonacci(count).filter(element => element!=1)
// console.log(temp);
let temp = fibonacci(count).map(element =>{
    if (element==1){
        element=0;
    }
    return element
});
console.log(temp);
console.log("Fibonacci Array: "+fibonacci(count));
console.log("Sum of "+count+" Fibonacci Array's first number: "+ sum);
