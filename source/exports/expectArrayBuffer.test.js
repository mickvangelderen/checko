/* eslint-env mocha */
const expect = require('must')
const expectArrayBuffer = require('./expectArrayBuffer')
const inspect = require('./inspect')
const relativePath = require('../test/relativePath')
const testCases = require('../test/testCases')

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectArrayBuffer).to.be.a.function()
	})

	testCases(expectArrayBuffer, [
		{ name: 'argument objects', input: [ (function() { return arguments })() ], throws: `Expected ${inspect((function() { return arguments })())} to be an ArrayBuffer.` },
		{ name: 'arrays'          , input: [ [] ]                                 , throws: `Expected ${inspect([])} to be an ArrayBuffer.` },
		{ name: 'objects'         , input: [ {} ]                                 , throws: `Expected ${inspect({})} to be an ArrayBuffer.` },
		{ name: 'array buffers'   , input: [ new ArrayBuffer() ]                  , output: new ArrayBuffer() }
	])
})
