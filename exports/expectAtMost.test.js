
/* eslint-env mocha */
const expectAtMost = require('./expectAtMost')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectAtMost).to.be.a.function()
	})
})
