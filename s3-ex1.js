function validAnagram(s1, s2){
    var first = {};
    var second = {};
    
    if (s1.length != s2.length)
    {
        return false;
    }
    
    for (let i = 0; i < s1.length; i++)
    {
        let s = s1[i];
        if (first[s])
        {
            first[s]++;
        }
        else
        {
            first[s] = 1;
        }
    }

    for (let i = 0; i < s2.length; i++)
    {
        let s = s2[i];
        if (second[s])
        {
            second[s]++;
        }
        else
        {
            second[s] = 1;
        }
    }

    for (let i = 0; i < s1.length; i++)
    {
        let s = s1[i];
        if (first[s] != second[s])
        {
            return false;
        }
    }
    
    return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("qwerty", "qerwty"))

