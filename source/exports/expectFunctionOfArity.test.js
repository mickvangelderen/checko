
/* eslint-env mocha */
import expectFunctionOfArity from './expectFunctionOfArity'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFunctionOfArity).to.be.a.function()
	})
})
