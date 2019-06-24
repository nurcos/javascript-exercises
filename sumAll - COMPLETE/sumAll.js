const sumAll = function(first, second) {

  let sum = 0;
  let largest = first
  let smallest = second;

  if (first < 0 || second < 0 || typeof first != 'number' || typeof second != 'number') {
    return 'ERROR';
  }
  
  if (first < second) {
    largest = second;
    smallest = first;
  }

  for (let i = smallest; i <= largest; i++) {
    sum += i;
  }

  return sum;

}

module.exports = sumAll
