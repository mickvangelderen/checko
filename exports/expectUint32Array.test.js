
/* eslint-env mocha */
const expectUint32Array = require('./expectUint32Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectUint32Array).to.be.a.function()
	})
})
