function fib(n){
    if (n === 1) return 1;
    else if (n === 0) return 0;
    else return fib(n - 1) + fib(n - 2);
}
  
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
