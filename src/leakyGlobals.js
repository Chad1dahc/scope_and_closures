// This is a simple file to show accessing global shit but like in node
const assert = require('assert');

name = 'outside'

const showScopeByOverride = () => {
	return global.name
}

const setVariable = (name, value) => {
	global[name] = value
}

const getVariable = (name) => {
	return global[name]
}

getVariableGlobal = (name) => {
	return global[name]
}

setVariable('chad', 'lil guy')
setVariable('showScopeByOverride', showScopeByOverride)

const whatIsChad = getVariable('chad')
const eqWhatIsChad = global.getVariableGlobal('chad')

assert.equal(whatIsChad, eqWhatIsChad, 'These should match, failure is a global issue.')
assert.equal(showScopeByOverride(), global.showScopeByOverride(), 'These should match, failure is a global issue.')
