// global is implied

// this is the scope of the next higher {}

function fooFunc() {
	return this.bar
}

var firstObject = {
	bar: 'double',
	foo: fooFunc
}

var secondObject = {
	bar: 'lol internal',
	foo: firstObject
}

var nestedVarObject = {
 	bar: 'lol',
 	foo: secondObject
}

var plainObject = {
 	bar: 'lol',
 	foo: {
		bar: 'lol internal',
		tiddler: fooFunc,
		foo: {
			bar: 'double',
			foo: fooFunc
		}
	}
}  

module.exports = {
	firstObject,
	secondObject,
	nestedVarObject,
	plainObject
}          