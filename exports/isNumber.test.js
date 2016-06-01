
/* eslint-env mocha */
const isNumber = require('./isNumber')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isNumber).to.be.a.function()
	})
})
