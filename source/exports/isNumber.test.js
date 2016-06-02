
/* eslint-env mocha */
import isNumber from './isNumber'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isNumber).to.be.a.function()
	})
})
