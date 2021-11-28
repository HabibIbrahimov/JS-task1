// var numbers = [4, 1, 2, 55, -9];
// var maxNum = Math.max(...numbers);
// console.log(maxNum);

// function sum () {
//     let arr=Array.from(arguments);
//     var maxNum = Math.max(...arr);
//     console.log(maxNum);
// }
// sum(12,13,98)



//CALCULATOR

// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// console.log(`${number1} ${operator} ${number2} = ${result}`);


//EVENNUMBERS
 let Numbers = [2,4,5,7,11,12]
 function returnEvenNumbersFromArray(array) {
	finishedArray = []
	array.forEach(function(num) {
  	if(!(num % 2)) {
    	finishedArray.push(num)
    }
  })
  return finishedArray;
}
console.log(returnEvenNumbersFromArray(Numbers))