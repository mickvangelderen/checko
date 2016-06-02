
/* eslint-env mocha */
const expectNumber = require('./expectNumber')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectNumber).to.be.a.function()
	})
})
