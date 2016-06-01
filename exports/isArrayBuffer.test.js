
/* eslint-env mocha */
import isArrayBuffer from './isArrayBuffer'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isArrayBuffer).to.be.a.function()
	})
})
