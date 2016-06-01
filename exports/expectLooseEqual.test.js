
/* eslint-env mocha */
const expectLooseEqual = require('./expectLooseEqual')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectLooseEqual).to.be.a.function()
	})
})
