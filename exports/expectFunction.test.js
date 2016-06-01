
/* eslint-env mocha */
const expectFunction = require('./expectFunction')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFunction).to.be.a.function()
	})
})
