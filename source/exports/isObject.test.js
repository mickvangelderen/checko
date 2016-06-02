
/* eslint-env mocha */
const isObject = require('./isObject')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isObject).to.be.a.function()
	})
})
