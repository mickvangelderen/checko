
/* eslint-env mocha */
const expectBoolean = require('./expectBoolean')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectBoolean).to.be.a.function()
	})
})
