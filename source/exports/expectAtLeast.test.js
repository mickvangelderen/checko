
/* eslint-env mocha */
const expectAtLeast = require('./expectAtLeast')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectAtLeast).to.be.a.function()
	})
})
