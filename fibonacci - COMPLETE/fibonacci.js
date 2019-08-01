const fibonacci = function(number) {

  let fromString = +number;

  if(number < 0){
    return 'OOPS';
  }

  let lastNumber = 1;
  let currentNumber = 1;

  let i = 1;

  while(true){

    currentNumber = lastNumber + currentNumber;
    lastNumber = currentNumber - lastNumber;

    i++;

    if(i == fromString-1){
      break;
    }
  }

  return currentNumber;
}

module.exports = fibonacci
