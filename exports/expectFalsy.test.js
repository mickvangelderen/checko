
/* eslint-env mocha */
import expectFalsy from './expectFalsy'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFalsy).to.be.a.function()
	})
})
