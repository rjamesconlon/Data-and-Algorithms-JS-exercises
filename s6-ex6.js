function isSubsequence(s1, s2) {    
    
    if (s1.length > s2.length) return false;
    
    let a = 0;
    let b = 0;

    while(b < s2.length)
    {
        if (s1[a] === s2[b]) a++;
        b++;
        
        if (a === s1.length) return true;
    }

    return false;
}

console.log(isSubsequence("hello", "hello world")); // True
console.log(isSubsequence("sing", "sting")); // True
console.log(isSubsequence("abc", "abracadabra")); // True
console.log(isSubsequence("abc", "acb")); // False
