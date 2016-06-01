
/* eslint-env mocha */
const isDataView = require('./isDataView')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isDataView).to.be.a.function()
	})
})
