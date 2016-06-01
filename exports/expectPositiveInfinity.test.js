
/* eslint-env mocha */
const expectPositiveInfinity = require('./expectPositiveInfinity')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectPositiveInfinity).to.be.a.function()
	})
})
