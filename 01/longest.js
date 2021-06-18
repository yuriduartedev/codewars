function longest(s1, s2) {
  let newString = [];

  function filterLetter(string) {
    for (let index = 0; index < string.length; index++) {
      const element = string[index];    
      
      if(!newString.includes(element)) {
        newString.push(element);
      }
    }
  }

  filterLetter(s1);
  filterLetter(s2);
  newString.sort();
  return newString.toString().replace(/,/g, '');
}



longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")
