function reverse(s) {
    if (s.length <= 1) return s;
    else return s[s.length - 1] + reverse(s.slice(0, s.length - 1))
}
  
console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'