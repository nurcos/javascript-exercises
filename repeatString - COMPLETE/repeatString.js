const repeatString = function(word, amount) {

  if(amount < 0){
    return 'ERROR';
  }

  let repeatedString = '';

  for(let i = 0; i < amount; i++){
    repeatedString += word;
  }

  return repeatedString;
}

module.exports = repeatString
