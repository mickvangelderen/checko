
/* eslint-env mocha */
const isFloat64Array = require('./isFloat64Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isFloat64Array).to.be.a.function()
	})
})
