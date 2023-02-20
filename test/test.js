/* eslint-disable no-undef */
const assert = require('chai').assert
const multiply = require('../multiply')
// import multiply from '../multiply'

// eslint-disable-next-line no-undef
describe('****** Multiply function Test ******', () => {
  // eslint-disable-next-line no-undef
  it('1 * 1 should equal to 1', () => {
    assert.equal(multiply(1, 1), 1)
  })
  // eslint-disable-next-line no-undef
  it('2 * 2 should equal to 4', () => {
    assert.equal(multiply(2, 2), 4)
  })
  // eslint-disable-next-line no-undef
  it('3 * 3 should equal to 9', () => {
    assert.equal(multiply(3, 3), 9)
  })
  // eslint-disable-next-line no-undef
  it('4 * 4 should equal to 16', () => {
    assert.equal(multiply(4, 4), 16)
  })
  it('23 * 45 should equal to 23 * 45', () => {
    assert.equal(multiply(23, 45), 23 * 45)
  })
})
