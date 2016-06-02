
/* eslint-env mocha */
const isInt8Array = require('./isInt8Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isInt8Array).to.be.a.function()
	})
})
