
/* eslint-env mocha */
const isWeakSet = require('./isWeakSet')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isWeakSet).to.be.a.function()
	})
})
