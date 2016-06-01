
/* eslint-env mocha */
const isGeneratorFunction = require('./isGeneratorFunction')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isGeneratorFunction).to.be.a.function()
	})
})
