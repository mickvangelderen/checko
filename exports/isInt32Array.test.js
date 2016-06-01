
/* eslint-env mocha */
const isInt32Array = require('./isInt32Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isInt32Array).to.be.a.function()
	})
})
