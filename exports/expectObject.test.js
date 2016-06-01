
/* eslint-env mocha */
const expectObject = require('./expectObject')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectObject).to.be.a.function()
	})
})
