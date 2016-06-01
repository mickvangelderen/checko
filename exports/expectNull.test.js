
/* eslint-env mocha */
import expectNull from './expectNull'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectNull).to.be.a.function()
	})
})
