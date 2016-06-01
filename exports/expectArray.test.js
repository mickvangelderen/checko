/* eslint-env mocha */
const expect = require('must')
const expectArray = require('./expectArray')
const inspect = require('./inspect')
const relativePath = require('../test/relativePath')
const testCases = require('../test/testCases')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectArray).to.be.a.function()
	})

	testCases(expectArray, [
		{ name: 'argument objects', input: [ (function() { return arguments })() ], throws: `Expected ${inspect((function() { return arguments })())} to be an Array.` },
		{ name: 'arrays'          , input: [ [] ]                                 , output: [] },
		{ name: 'objects'         , input: [ {} ]                                 , throws: `Expected ${inspect({})} to be an Array.` },
		{ name: 'array buffers'   , input: [ new ArrayBuffer() ]                  , throws: `Expected ${inspect(new ArrayBuffer())} to be an Array.` }
	])
})
