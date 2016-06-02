
/* eslint-env mocha */
const isUndefined = require('./isUndefined')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isUndefined).to.be.a.function()
	})
})
