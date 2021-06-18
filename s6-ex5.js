function averagePair(arr, t)
{
    let s = 0;
    let e = arr.length;

    while (s < e)
    {
        if ((s + e) / 2 == t) return true; 
        else if ((s + e) / 2 < t) s++;
        else e--;
    }

    return false;
}

console.log(averagePair([1,2,3], 2.5)); // True
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); // True
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // False
console.log(averagePair([], 4)); // False
