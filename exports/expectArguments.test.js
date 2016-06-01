/* eslint-env mocha */
import expect from 'must'
import expectArguments from './expectArguments'
import inspect from './inspect'
import relativePath from '../test/relativePath'
import testCases from '../test/testCases'

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
