const assert = require('assert');

// Type your code here
const capitalizeFirstLetters =(input)=>{
  // return input.length && !input.includes(' ') > 0 ? input[0].toUpperCase() + input.slice(1): '';

  // first code version
  let output = '';
  if (input.length >0 && !input.includes(' '))
    {
      output = input[0].toUpperCase() + input.slice(1);
    }
  else if (input.length >0 && input.includes(' '))
    {
      outputSplit = input.split(' ').map(e =>(
        e[0].toUpperCase()+ e.slice(1))
      );
      output = outputSplit.join(' ');
    }
  else 
    {
      output ='';
    }
  return output;
}
// ************* tests

// test1: check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// test2: check that capitalizeFirstLetters takes one argument
assert.strictEqual(capitalizeFirstLetters.length, 1)

// // test3: check that capitalizeFirstLetters argument is a string
// assert.strictEqual(typeof input, 'string');

// test4: Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

// test5: Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// test6: Check that it works for i am learning TDD
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// test7: Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');