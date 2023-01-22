// Task 1

const enteredNumber = Number(prompt("Enter a number"));

function calculateSum(number) {
  sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}

const result = calculateSum(enteredNumber);
console.log(result);

// Task 3

let numArr = [4, -9, -98, -1, 444, 3, -555];
let positiveArray = [];
function characterChange(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveArray.push(array[i]);
    } else {
      positiveArray.push(array[i] * -1);
    }
  }
  return positiveArray;
}

let newArray = characterChange(numArr);
console.log(newArray);

// Task 4

const givenArr = [12, 45, 88, 1, 567, 3, 91];
let oddArray = [];

function oddSelector(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }
  return oddArray;
}

const oddNumbers = oddSelector(givenArr);
console.log(oddNumbers);

// Task 5

let arr = ["Ivo", 26, "Macedonia", 2001, 180];

function deleteNonNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] != "number") {
      array.splice(i, 1);
    }
  }
  return numberArray;
}

const numbersOnly = deleteNonNumbers(arr);
console.log(numbersOnly);