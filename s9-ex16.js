function isPalindrome(s){
    if (s.length <= 1) return true;
    if (s[0] !== s[s.length - 1]) return false;
    else return isPalindrome(s.slice(1, s.length - 1));
}
   
console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
