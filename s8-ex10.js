function power(b, e){
    if (e === 0) return 1;
    else return b * power(b, e - 1);
}

console.log(power(2,0)); // 1
console.log(power(2,2)); // 4
console.log(power(2,4)); // 16