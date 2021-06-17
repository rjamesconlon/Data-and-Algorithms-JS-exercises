function areThereDuplicates() {
    // Time complexity : O(n)
    // Space complexity : O(n) 
    if (arguments.length < 2) return true;

    let dups = {};

    for (let a in arguments)
    {
        if (dups[arguments[a]]) return true;
        else dups[arguments[a]] = 1;
    }

    return false;
}

function areThereDuplicatesBonus() {
    // Time complexity : O(n log(n))
    // Space complexity : O(1) 
    if (arguments.length < 2) return true;

    for (let i = 0; i < arguments.length - 1; i++)
    {
    }

    return false;
}


console.log(areThereDuplicates(1, 2, 3)); // False
console.log(areThereDuplicates(1, 2, 2)); // True
console.log(areThereDuplicates("a", "b", "c", "a")); // True

// console.log(areThereDuplicatesBonus(1, 2, 3)); // False
// console.log(areThereDuplicatesBonus(1, 2, 2)); // True
// console.log(areThereDuplicatesBonus("a", "b", "c", "a")); // True
