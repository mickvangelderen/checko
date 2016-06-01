
/* eslint-env mocha */
import expectInfiniteNumber from './expectInfiniteNumber'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectInfiniteNumber).to.be.a.function()
	})
})
