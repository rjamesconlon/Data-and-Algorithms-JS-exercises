function countUniqueValues(arr){
    let i = 0;
    let j = 1;
    let count = 1;

    if (arr.length === 0)
    {
        return 0;
    }

    while(j < arr.length)
    {
        if (arr[i] != arr[j])
        {
            count++;
        }

        i++;
        j++;
    }

    return count;
}


  console.log(countUniqueValues([1,1,1,1,1,2])); // 2
  console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
  console.log(countUniqueValues([])); // 0
  console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
