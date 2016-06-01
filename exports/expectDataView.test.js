
/* eslint-env mocha */
const expectDataView = require('./expectDataView')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectDataView).to.be.a.function()
	})
})
