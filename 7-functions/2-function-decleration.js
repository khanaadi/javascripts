// Function declaration 
function mathOperations(a, b) { // Here a , b are two parameters
    console.log(`value of a = ${a}`);
    console.log(`value of b = ${b}`);
    const addition = a + b;
    const subtraction = a - b;
    const multiply = a * b;
    const division = a / b;
    const modulo = a % b;
  
    console.log(addition);
    console.log(subtraction);
    console.log(multiply);
    console.log(division);
    console.log(modulo);
  }
  
  
  console.log("Calling mathOperations function with no arguments")
  mathOperations(); 
  
  console.log("Calling mathOperations function with one argument");
  mathOperations(78);
  
  console.log("Calling mathOperations function with two arguments");
  mathOperations(100, 56);