
/* eslint-env mocha */
const expectFunctionOfArity = require('./expectFunctionOfArity')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFunctionOfArity).to.be.a.function()
	})
})
