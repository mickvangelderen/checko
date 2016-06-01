
/* eslint-env mocha */
import isInt8Array from './isInt8Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isInt8Array).to.be.a.function()
	})
})
