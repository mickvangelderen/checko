
/* eslint-env mocha */
const expectTruthy = require('./expectTruthy')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectTruthy).to.be.a.function()
	})
})
