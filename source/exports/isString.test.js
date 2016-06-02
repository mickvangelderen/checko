
/* eslint-env mocha */
const isString = require('./isString')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isString).to.be.a.function()
	})
})
