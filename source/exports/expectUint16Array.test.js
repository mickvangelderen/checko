
/* eslint-env mocha */
const expectUint16Array = require('./expectUint16Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectUint16Array).to.be.a.function()
	})
})
