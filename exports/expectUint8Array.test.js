
/* eslint-env mocha */
const expectUint8Array = require('./expectUint8Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectUint8Array).to.be.a.function()
	})
})
