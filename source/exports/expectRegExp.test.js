
/* eslint-env mocha */
const expectRegExp = require('./expectRegExp')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectRegExp).to.be.a.function()
	})
})
