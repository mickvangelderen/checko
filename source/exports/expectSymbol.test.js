
/* eslint-env mocha */
const expectSymbol = require('./expectSymbol')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectSymbol).to.be.a.function()
	})
})
