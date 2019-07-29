function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (...numbers) {
	let sum = 0;
	let array = numbers[0];

	array.forEach((item) => {
    sum += item;
  });

	return sum;
}

function multiply (...numbers) {
	let sum = 1;
	let array = numbers[0];

	array.forEach((item) => {
		sum *= item;
	});

	return sum;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	let sum = 1;
	for(let i = a; i > 1; i--){
		sum *= i;
	}

	return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
