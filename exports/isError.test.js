
/* eslint-env mocha */
const isError = require('./isError')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isError).to.be.a.function()
	})
})
