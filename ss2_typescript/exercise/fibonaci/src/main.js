var fibonacis = [1, 1];
var sum = 2;
for (var i = 0; i < 18; i++) {
    var temp = fibonacis[i] + fibonacis[i + 1];
    fibonacis.push(temp);
    sum += fibonacis[i + 2];
}
console.log(fibonacis);
console.log(sum);
