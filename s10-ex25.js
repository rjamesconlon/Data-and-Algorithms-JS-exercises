function binarySearch(arr, val){
    let s = 0;
    let e = arr.length - 1;
    let count = 0;

    while (s <= e) {
        let m = Math.floor((s + e) / 2);
        if (arr[m] === val) return m ;
        else if (arr[m] < val) s = m + 1;
        else e = m - 1; 
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5], 2)); // 1
console.log(binarySearch([1,2,3,4,5,6], 3)); // 2
console.log(binarySearch([1,2,3,4,5], 5)); // 4
console.log(binarySearch([1,2,3,4,5], 6)); // -1
