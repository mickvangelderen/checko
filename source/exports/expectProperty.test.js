
/* eslint-env mocha */
const expectProperty = require('./expectProperty')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectProperty).to.be.a.function()
	})
})
