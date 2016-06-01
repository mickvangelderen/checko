
/* eslint-env mocha */
const expectFloat64Array = require('./expectFloat64Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFloat64Array).to.be.a.function()
	})
})
