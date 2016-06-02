
/* eslint-env mocha */
const expectInfiniteNumber = require('./expectInfiniteNumber')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectInfiniteNumber).to.be.a.function()
	})
})
