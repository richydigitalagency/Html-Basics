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