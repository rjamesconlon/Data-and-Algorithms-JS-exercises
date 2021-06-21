function linearSearch(arr, v){
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] === v) return i;
    }

    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([100], 100)); // 0
