
/* eslint-env mocha */
const isUint8ClampedArray = require('./isUint8ClampedArray')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isUint8ClampedArray).to.be.a.function()
	})
})
