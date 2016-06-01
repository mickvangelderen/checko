
/* eslint-env mocha */
const isRegExp = require('./isRegExp')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isRegExp).to.be.a.function()
	})
})
