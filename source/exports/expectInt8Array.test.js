
/* eslint-env mocha */
const expectInt8Array = require('./expectInt8Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectInt8Array).to.be.a.function()
	})
})
