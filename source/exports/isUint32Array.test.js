
/* eslint-env mocha */
import isUint32Array from './isUint32Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isUint32Array).to.be.a.function()
	})
})
