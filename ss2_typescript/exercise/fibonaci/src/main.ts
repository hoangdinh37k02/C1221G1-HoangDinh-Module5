let fibonacis:number[] =[1,1];
let sum = 2;
for (let i=0; i<18; i++){
    let temp=fibonacis[i]+fibonacis[i+1];
    fibonacis.push(temp);
    sum+=fibonacis[i+2];
}
console.log(fibonacis);
console.log(sum);
