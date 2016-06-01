
/* eslint-env mocha */
const expectDeepEqual = require('./expectDeepEqual')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectDeepEqual).to.be.a.function()
	})
})
