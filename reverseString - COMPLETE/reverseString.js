const reverseString = function(string) {

  let reversedString = '';

  for(let i = string.length; i >= 0; i--){
    reversedString += string.charAt(i);
  }

  return reversedString;
}

module.exports = reverseString
