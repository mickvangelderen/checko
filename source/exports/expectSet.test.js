
/* eslint-env mocha */
const expectSet = require('./expectSet')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectSet).to.be.a.function()
	})
})
