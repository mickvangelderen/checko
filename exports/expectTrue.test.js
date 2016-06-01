
/* eslint-env mocha */
const expectTrue = require('./expectTrue')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectTrue).to.be.a.function()
	})
})
