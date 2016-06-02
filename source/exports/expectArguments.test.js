/* eslint-env mocha */
const expect = require('must')
const expectArguments = require('./expectArguments')
const inspect = require('./inspect')
const relativePath = require('../test/relativePath')
const testCases = require('../test/testCases')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectArguments).to.be.a.function()
	})

	testCases(expectArguments, [
		{ name: 'argument objects', input: [ (function() { return arguments })() ], output: (function() { return arguments })() },
		{ name: 'arrays'          , input: [ [] ]                                 , throws: `Expected ${inspect([])} to be an Arguments object.` },
		{ name: 'objects'         , input: [ {} ]                                 , throws: `Expected ${inspect({})} to be an Arguments object.` },
		{ name: 'array buffers'   , input: [ new ArrayBuffer() ]                  , throws: `Expected ${inspect(new ArrayBuffer())} to be an Arguments object.` }
	])
})
