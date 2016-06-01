
/* eslint-env mocha */
const expectMoreThan = require('./expectMoreThan')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectMoreThan).to.be.a.function()
	})
})
