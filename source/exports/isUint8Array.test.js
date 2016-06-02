/* eslint-env mocha */
const isUint8Array = require('./isUint8Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isUint8Array).to.be.a.function()
	})
})
