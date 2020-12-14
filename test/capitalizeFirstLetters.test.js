const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

// ************* tests*

describe('capitalizeFirstLetters', ()=>{

  it('is a function accepting one argument', ()=>{
  // test1: check that capitalizeFirstLetters is a function
  assert.strictEqual(typeof capitalizeFirstLetters, 'function');

  // test2: check that capitalizeFirstLetters takes one argument
  assert.strictEqual(capitalizeFirstLetters.length, 1)
  } )


  // // test3: check that capitalizeFirstLetters argument is a string
  // assert.strictEqual(typeof input, 'string');

  it('transforms javaScript correctly', () => {
    // test4: Check that capitalizeFirstLetters transforms javaScript correctly
    assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
  });

  it('works with a 1-character string', () => {
    // test5: Check that it works for a 1-character string
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  });

  it ('works with multiple words', ()=>{
    // test6: Check that it works for i am learning TDD
    assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
  })
  
  it('works with an empty string', () => {
    // test7: Check that it works for an empty string
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });

});
