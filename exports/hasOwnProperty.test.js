
/* eslint-env mocha */
const hasOwnProperty = require('./hasOwnProperty')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(hasOwnProperty).to.be.a.function()
	})
})
