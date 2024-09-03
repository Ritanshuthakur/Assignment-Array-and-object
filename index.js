let numbers = [5, 3, 8, 1, 2];

function addNumber(array, number) {
  array.push(number);
  return array;
}

function removeNumber(array, number) {
  const index = array.indexOf(number);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

function sortNumbers(array) {
  return [...array].sort((a, b) => a - b);
}

function calculateSum(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

function calculateAverage(array) {
  if (array.length === 0) return 0;
  const sum = calculateSum(array);
  return sum / array.length;
}

console.log("Initial array:", numbers);

numbers = addNumber(numbers, 4);
console.log("After adding 4:", numbers);

numbers = removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

const sortedNumbers = sortNumbers(numbers);
console.log("Sorted array:", sortedNumbers);

const sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

const average = calculateAverage(numbers);
console.log("Average of numbers:", average);


