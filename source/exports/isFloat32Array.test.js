
/* eslint-env mocha */
import isFloat32Array from './isFloat32Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isFloat32Array).to.be.a.function()
	})
})
