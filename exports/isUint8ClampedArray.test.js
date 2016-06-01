
/* eslint-env mocha */
import isUint8ClampedArray from './isUint8ClampedArray'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isUint8ClampedArray).to.be.a.function()
	})
})
