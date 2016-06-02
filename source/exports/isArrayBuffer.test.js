
/* eslint-env mocha */
const isArrayBuffer = require('./isArrayBuffer')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isArrayBuffer).to.be.a.function()
	})
})
