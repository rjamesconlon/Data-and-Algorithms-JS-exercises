function sameFrequency(a, b){
    let x = a.toString();
    let y = b.toString(); 
    var xA = {};
    var yA = {};
    
    if (x.length != y.length)
    {
        return false;
    }
    
    for (let i = 0; i < x.length; i++)
    {
        let s = x[i];
        if (xA[s])
        {
            xA[s]++;
        }
        else
        {
            xA[s] = 1;
        }
    }

    for (let i = 0; i < y.length; i++)
    {
        let s = y[i];
        if (yA[s])
        {
            yA[s]++;
        }
        else
        {
            yA[s] = 1;
        }
    }

    for (let i = 0; i < x.length; i++)
    {
        let s = x[i];
        if (xA[s] != yA[s])
        {
            return false;
        }
    }
    
    return true;
}

console.log(sameFrequency(182, 281));  // True
console.log(sameFrequency(34, 14));    // False
console.log(sameFrequency(3589578, 5879385));  // True
console.log(sameFrequency(22, 222));  // False

  