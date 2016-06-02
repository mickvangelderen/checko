
/* eslint-env mocha */
const expectDate = require('./expectDate')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectDate).to.be.a.function()
	})
})
