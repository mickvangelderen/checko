
/* eslint-env mocha */
const expectFalse = require('./expectFalse')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFalse).to.be.a.function()
	})
})
