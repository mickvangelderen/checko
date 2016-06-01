
/* eslint-env mocha */
const isInfiniteNumber = require('./isInfiniteNumber')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isInfiniteNumber).to.be.a.function()
	})
})
