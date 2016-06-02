
/* eslint-env mocha */
const isArray = require('./isArray')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isArray).to.be.a.function()
	})
})
