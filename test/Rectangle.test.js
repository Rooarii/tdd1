const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('rectangle', () => {
  it('is a square', () => {
    const rectangle = new Rectangle(3, 3);
    // test1: check taht a and b are equal
    assert.strictEqual(rectangle.isSquare(), true);
  })

  it('is a not square', () => {
    const rectangle = new Rectangle(3, 5);
    // test2: check that a and b are !equal
    assert.strictEqual(rectangle.isSquare(), false);
  })

  it('gives the area', () => {
    const rectangle = new Rectangle(13, 7);
    // test3: check that the getArea is processed well
    assert.strictEqual(rectangle.getArea(), 91)
  })

  it('gives the perimeter', () => {
    const rectangle = new Rectangle(13, 7);
    // test4: check that the getPerimeter is processed well
    assert.strictEqual(rectangle.getPerimeter(), 40)
  })
})