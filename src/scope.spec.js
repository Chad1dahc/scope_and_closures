const {
  firstObject,
  nestedVarObject,
  plainObject,
} = require('./scope-ideas')

describe('Scope Tests', () => {
  it('should return the correct instance of bar', () => {
    expect(firstObject.foo()).toBe('double')
  })
  it('should return the correct nested instance of bar', () => {
    expect(nestedVarObject.foo.foo.foo()).toBe('double')
  })
  it('should return the correct instance of bar', () => {
    expect(plainObject.foo.tiddler()).toBe('lol internal')
  })
})
