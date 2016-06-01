
/* eslint-env mocha */
const isPositiveInfinity = require('./isPositiveInfinity')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isPositiveInfinity).to.be.a.function()
	})
})
