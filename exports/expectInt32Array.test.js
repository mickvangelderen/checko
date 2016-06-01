
/* eslint-env mocha */
const expectInt32Array = require('./expectInt32Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectInt32Array).to.be.a.function()
	})
})
