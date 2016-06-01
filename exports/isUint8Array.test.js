
/* eslint-env mocha */
import isUint8Array from './isUint8Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isUint8Array).to.be.a.function()
	})
})
