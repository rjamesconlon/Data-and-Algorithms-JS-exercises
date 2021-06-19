function productOfArray(a) {
    if (a.length === 1) return a[0];
    else return a[0] * productOfArray(a.slice(1));
};

console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60