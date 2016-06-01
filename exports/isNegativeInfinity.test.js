
/* eslint-env mocha */
import isNegativeInfinity from './isNegativeInfinity'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isNegativeInfinity).to.be.a.function()
	})
})
