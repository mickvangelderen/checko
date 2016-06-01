
/* eslint-env mocha */
const isNegativeInfinity = require('./isNegativeInfinity')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isNegativeInfinity).to.be.a.function()
	})
})
