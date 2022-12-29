function add(a, b) {
    return a + b;
  }
  
  
  const subtraction = function (a, b) {
    return a - b;
  }
  
 
  const multiply = (a, b) => {
    return a * b;
  }
                  
  const addition = add(56, 99);
  console.log(`Addition value is ${addition}`);
  
  
  const minus = subtraction(100, 56);
  console.log(`Minus of 100 and 56 is ${minus}`);
  
  const twoMultiply = multiply(2, 99);
  console.log(`Mutliple of 2 and 99 is ${twoMultiply}`);
  
  
  const addOne = add();
  console.log(`Calling add function without arguments = ${addOne}`)
  
  