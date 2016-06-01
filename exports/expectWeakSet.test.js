
/* eslint-env mocha */
const expectWeakSet = require('./expectWeakSet')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectWeakSet).to.be.a.function()
	})
})
