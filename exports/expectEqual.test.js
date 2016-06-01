
/* eslint-env mocha */
const expectEqual = require('./expectEqual')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectEqual).to.be.a.function()
	})
})
