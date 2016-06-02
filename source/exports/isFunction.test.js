
/* eslint-env mocha */
const isFunction = require('./isFunction')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isFunction).to.be.a.function()
	})
})
