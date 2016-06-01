
/* eslint-env mocha */
const expectUint8ClampedArray = require('./expectUint8ClampedArray')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectUint8ClampedArray).to.be.a.function()
	})
})
