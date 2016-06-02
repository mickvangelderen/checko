
/* eslint-env mocha */
const expectLessThan = require('./expectLessThan')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectLessThan).to.be.a.function()
	})
})
