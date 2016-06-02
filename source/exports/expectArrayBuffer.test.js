/* eslint-env mocha */
import expect from 'must'
import expectArrayBuffer from './expectArrayBuffer'
import inspect from './inspect'
import relativePath from '../test/relativePath'
import testCases from '../test/testCases'

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
