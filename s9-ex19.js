function capitalizeFirst (arr) {

    function f(a, n) {
        console.log(a);
        if (a.length === n) return;
        else a[n] = a[n].charAt(0).toUpperCase() + a[n].slice(1);
        return f(a, ++n);
    }
    
    f(arr, 0);

    return arr;
}

/* Course solution */
// function capitalizeWords (array) {
//     console.log(array);
//     if (array.length === 1) {
//       return [array[0].toUpperCase()];
//     }
//     let res = capitalizeWords(array.slice(0, -1));
//     console.log(res, "before");
//     res.push(array.slice(array.length-1)[0].toUpperCase());
//     console.log(res, "after");
//     return res;
// }
  
console.log(capitalizeWords(['car','taco','banana'])); // ['Car','Taco','Banana']
  