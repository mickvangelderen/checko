
/* eslint-env mocha */
const isInt16Array = require('./isInt16Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isInt16Array).to.be.a.function()
	})
})
