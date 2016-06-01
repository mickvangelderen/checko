
/* eslint-env mocha */
const isWeakMap = require('./isWeakMap')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isWeakMap).to.be.a.function()
	})
})
