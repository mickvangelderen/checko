
/* eslint-env mocha */
const expectError = require('./expectError')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectError).to.be.a.function()
	})
})
