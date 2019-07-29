

const palindromes = function(word) {
  word = word.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
  let string = '';

  for (let i = word.length-1; i > -1; i--){
    let character = word.charAt(i);
      string += character;
  }

  if (string == word){
    return true;
  }
  return false;
}


module.exports = palindromes
