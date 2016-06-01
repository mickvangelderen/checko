/* eslint-env mocha */
import expect from 'must'
import expectArray from './expectArray'
import inspect from './inspect'
import relativePath from '../test/relativePath'
import testCases from '../test/testCases'

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
