
/* eslint-env mocha */
const expectNull = require('./expectNull')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectNull).to.be.a.function()
	})
})
