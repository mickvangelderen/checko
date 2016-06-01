
/* eslint-env mocha */
const expectMap = require('./expectMap')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectMap).to.be.a.function()
	})
})
