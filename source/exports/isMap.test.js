
/* eslint-env mocha */
const isMap = require('./isMap')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isMap).to.be.a.function()
	})
})
