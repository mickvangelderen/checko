
/* eslint-env mocha */
import isFloat64Array from './isFloat64Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isFloat64Array).to.be.a.function()
	})
})
