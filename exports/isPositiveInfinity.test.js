
/* eslint-env mocha */
import isPositiveInfinity from './isPositiveInfinity'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isPositiveInfinity).to.be.a.function()
	})
})
