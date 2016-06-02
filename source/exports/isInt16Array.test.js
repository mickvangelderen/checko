
/* eslint-env mocha */
import isInt16Array from './isInt16Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isInt16Array).to.be.a.function()
	})
})
