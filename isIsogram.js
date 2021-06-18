function isIsogram(str) {
  const compleStrtLenght = str.length;
  let newStr = [];

  str.split('').map((letter) => {
    letter = letter.toLowerCase();

    if(newStr.includes(letter)) {
      return;
    } else {
      newStr.push(letter);
    }
  });

  return compleStrtLenght === newStr.length;
}

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
