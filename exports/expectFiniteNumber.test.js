
/* eslint-env mocha */
const expectFiniteNumber = require('./expectFiniteNumber')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFiniteNumber).to.be.a.function()
	})
})
