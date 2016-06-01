
/* eslint-env mocha */
const expectWeakMap = require('./expectWeakMap')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectWeakMap).to.be.a.function()
	})
})
