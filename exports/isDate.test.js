
/* eslint-env mocha */
const isDate = require('./isDate')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isDate).to.be.a.function()
	})
})