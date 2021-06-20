function flatten(arr){
  let newArr = [];

  function f(a) {
    if (!a.length) return;
    else if (Array.isArray(a[0])) f(a[0]);
    else newArr.push(a[0]);

    f(a.slice(1));
  }

  f(arr);

  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]