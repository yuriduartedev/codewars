function alphabetPosition(text) {
  text = text.toLowerCase();
  var numbers = [];

  text.split('').map((letter) => {  
    console.log(`==========  letter: ${letter} ==========`);
    if(letter !== ' ') {
      numbers.push((letter.charCodeAt(0) - 97) + 1);  
    }
  });  

  return numbers.toString();
  // return numbers.toString().replace(/,/gi, '');
}

var test = alphabetPosition("The ");



console.group('Função');
console.group('Resultado');
console.log(test);
console.groupEnd();
console.group('Type');
console.log(typeof test);
console.groupEnd();
console.groupEnd();
