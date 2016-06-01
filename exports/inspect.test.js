
/* eslint-env mocha */
const inspect = require('./inspect')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(inspect).to.be.a.function()
	})
})
