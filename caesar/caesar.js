const caesar = function(word, amount) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let newWord = '';

  for (let i = 0; i < word.length; i++){

    if (word.charAt(i).match(/[a-z]/i)){ //check if punctuation

      let currentChar = word.charAt(i).toLowerCase();

      let arrayPosition = alphabet.indexOf(currentChar);

      if((arrayPosition + amount) > 25){
        arrayPosition = (arrayPosition + amount) % 26;
      }
      else if((arrayPosition + amount) < 0){
        arrayPosition = (arrayPosition - amount) % 26;
      }
      else{
        arrayPosition = arrayPosition+amount;
      }

      let newLetter = alphabet[arrayPosition];

      if(currentChar != word.charAt(i)){
        newLetter = newLetter.toUpperCase();
      }

      newWord += newLetter;
    }
    else{
      newWord += word.charAt(i);
    }
  }

  return newWord;
}

module.exports = caesar
