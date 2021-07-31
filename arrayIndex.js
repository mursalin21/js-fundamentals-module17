var books = ['hablu', 'bolod', 'hello', 'battery', 'peracitamol', 'gymnasium'];

var batteryIndex = books.indexOf('hello');
// console.log(batteryIndex);

var numbers = [45, 98, 65, 72, 52, 63];
var index = numbers.indexOf(72);
var x = numbers.indexOf(55); // Returns -1 if element not in array
// console.log(index);

var secondIndex = books[0];
// console.log(secondIndex);

var thirdIndex = books[199]; //Returns "undefined", if array Index out of range.
// console.log(thirdIndex);

//changing a value inside array

numbers[1] = 95;
numbers[4] = 21;
numbers[6] = 90;
console.log(numbers);