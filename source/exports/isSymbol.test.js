
/* eslint-env mocha */
const isSymbol = require('./isSymbol')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isSymbol).to.be.a.function()
	})
})
