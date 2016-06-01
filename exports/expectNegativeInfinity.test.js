
/* eslint-env mocha */
const expectNegativeInfinity = require('./expectNegativeInfinity')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectNegativeInfinity).to.be.a.function()
	})
})
