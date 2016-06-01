
/* eslint-env mocha */
const expectFalsy = require('./expectFalsy')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFalsy).to.be.a.function()
	})
})
