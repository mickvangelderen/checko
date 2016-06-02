
/* eslint-env mocha */
const isUint16Array = require('./isUint16Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isUint16Array).to.be.a.function()
	})
})
