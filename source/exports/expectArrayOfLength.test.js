/* eslint-env mocha */
const expect = require('must')
const expectArrayOfLength = require('./expectArrayOfLength')
const testCases = require('../test/testCases')
const relativePath = require('../test/relativePath')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectArrayOfLength).to.be.a.function()
	})

	testCases(expectArrayOfLength, [
		{ name: 'undefined', input: [], throws: 'Expected undefined to be an Array.' },
		{ name: '0 with array of length 0', input: [ 0, [] ], output: [] },
		{ name: '1 with array of length 1', input: [ 1, [] ], throws: `Expected 0 to equal 1.` },
		{ name: '0 with array of length 0', input: [ 0, [ 1 ] ], throws: `Expected 1 to equal 0.` },
		{ name: '1 with array of length 1', input: [ 1, [ 1 ] ], output: [ 1 ] }
	])

})
