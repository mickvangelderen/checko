
/* eslint-env mocha */
const expectGeneratorFunction = require('./expectGeneratorFunction')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectGeneratorFunction).to.be.a.function()
	})
})
