
/* eslint-env mocha */
const expectNaN = require('./expectNaN')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectNaN).to.be.a.function()
	})
})
