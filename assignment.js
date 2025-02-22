//Area of a Rectangle
function calculateArea(length, width) {
    return length * width;
}
//Testing the function with different value for length and width
calculateArea(5, 10);
output: 50

//Greeting Message
function greet(name) {
  return "Hello, " + name; 
}

//Testing the function with different name
console.log(greet("Richard"));
output: Hello, Richard


//Sum Of Numbers
function sumNumbers(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total; 
}

//Testing the function with different arrays of numbers
console.log(sumNumbers([1, 2, 3, 4, 5, 6]))
output:21


// LOOPS
// **loop for  printing nubers
// ** for loop**
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ** while loop**
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Sum of numbers in Array

// ** for loop**
function sumForloop(numbers) {
    let sum = o;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
    return sum;
}

// ** while loop**
function sumWhileloop(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}

// printing Elements of an Array
// ** for loop**
function printForloop(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// ** while loop**
function printWhileloop(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

// Even or Odd Number

function isEven(num) {
    if (num % 2 === 0) {
    return `${num} is even`;
} else {
    return `${num} is odd`;
   }
}

// Grade Calculator

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    }  else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else if (score >= 40) {
        return "E";
    } else {
        return "F";
    }
}