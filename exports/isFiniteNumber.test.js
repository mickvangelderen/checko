
/* eslint-env mocha */
const isFiniteNumber = require('./isFiniteNumber')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isFiniteNumber).to.be.a.function()
	})
})
