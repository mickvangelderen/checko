
/* eslint-env mocha */
const isDeepEqual = require('./isDeepEqual')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isDeepEqual).to.be.a.function()
	})
})
