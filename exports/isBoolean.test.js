
/* eslint-env mocha */
const isBoolean = require('./isBoolean')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isBoolean).to.be.a.function()
	})
})
