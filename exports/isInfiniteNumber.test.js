
/* eslint-env mocha */
import isInfiniteNumber from './isInfiniteNumber'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isInfiniteNumber).to.be.a.function()
	})
})
