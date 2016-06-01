
/* eslint-env mocha */
import expectFalse from './expectFalse'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFalse).to.be.a.function()
	})
})
