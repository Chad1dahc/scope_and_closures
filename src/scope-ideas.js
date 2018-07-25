// global is implied

// this is the scope of the next higher {}

function fooFunc() {
  return this.bar
}

const firstObject = {
  bar: 'double',
  foo: fooFunc,
}

const secondObject = {
  bar: 'lol internal',
  foo: firstObject,
}

const nestedVarObject = {
  bar: 'lol',
  foo: secondObject,
}

const plainObject = {
  bar: 'lol',
  foo: {
    bar: 'lol internal',
    tiddler: fooFunc,
    foo: {
      bar: 'double',
      foo: fooFunc,
    },
  },
}

module.exports = {
  firstObject,
  secondObject,
  nestedVarObject,
  plainObject,
}
