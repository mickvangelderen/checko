
/* eslint-env mocha */
import expectUndefined from './expectUndefined'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectUndefined).to.be.a.function()
	})
})
