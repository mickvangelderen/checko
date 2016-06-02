
/* eslint-env mocha */
const expectNotEqual = require('./expectNotEqual')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectNotEqual).to.be.a.function()
	})
})
