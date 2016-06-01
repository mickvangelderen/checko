
/* eslint-env mocha */
const expectOwnProperty = require('./expectOwnProperty')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectOwnProperty).to.be.a.function()
	})
})
