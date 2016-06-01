
/* eslint-env mocha */
import isUint16Array from './isUint16Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isUint16Array).to.be.a.function()
	})
})
