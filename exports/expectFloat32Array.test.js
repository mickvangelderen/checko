
/* eslint-env mocha */
const expectFloat32Array = require('./expectFloat32Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFloat32Array).to.be.a.function()
	})
})
