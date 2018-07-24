const {setVariable, getVariable} = require('./leakyGlobals')

describe('Global Tests', () => {
    it('should create a value when setting via setVariable', () => {
        setVariable('test', 'value')
        expect(global.test).toBe('value')
    })
    it('should access a value when getting via getVariable', () => {
        global.chad = 'the man'
        expect(getVariable('chad')).toBe('the man')
    })
    it('should set a variable equal to passed in variable', () => {
        const valueIn = 'testing'
        setVariable('test', valueIn)
        expect(getVariable('test')).toBe(valueIn)
    })
})