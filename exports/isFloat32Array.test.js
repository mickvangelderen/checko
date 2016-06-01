
/* eslint-env mocha */
const isFloat32Array = require('./isFloat32Array')
const expect = require('must')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isFloat32Array).to.be.a.function()
	})
})
