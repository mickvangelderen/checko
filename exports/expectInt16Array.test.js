
/* eslint-env mocha */
const expectInt16Array = require('./expectInt16Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectInt16Array).to.be.a.function()
	})
})
