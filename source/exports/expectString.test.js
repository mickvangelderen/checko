
/* eslint-env mocha */
const expectString = require('./expectString')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectString).to.be.a.function()
	})
})
