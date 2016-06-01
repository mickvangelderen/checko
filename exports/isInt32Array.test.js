
/* eslint-env mocha */
import isInt32Array from './isInt32Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isInt32Array).to.be.a.function()
	})
})
