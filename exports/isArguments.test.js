
/* eslint-env mocha */
const isArguments = require('./isArguments')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isArguments).to.be.a.function()
	})
})
