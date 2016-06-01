
/* eslint-env mocha */
const isUint32Array = require('./isUint32Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isUint32Array).to.be.a.function()
	})
})
