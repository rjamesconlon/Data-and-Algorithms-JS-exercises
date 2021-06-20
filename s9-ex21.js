function capitalizedWords (arr) {

    function f(a, n) {
        if (a.length === n) return;
        else a[n] = a[n].toUpperCase();
        return f(a, ++n);
    }
    
    f(arr, 0);

    return arr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']