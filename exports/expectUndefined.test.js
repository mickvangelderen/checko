
/* eslint-env mocha */
const expectUndefined = require('./expectUndefined')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectUndefined).to.be.a.function()
	})
})
