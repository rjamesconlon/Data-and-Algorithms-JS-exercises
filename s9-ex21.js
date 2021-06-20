function capitalizedWords (arr) {
    let newA = [];


    function f(a, n) {
        if (a.length === n) return;
        else newA.push(a[n].toUpperCase());
        return f(a, ++n);
    }
    
    f(arr, 0);

    return newA;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']