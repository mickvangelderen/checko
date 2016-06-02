
/* eslint-env mocha */
import isString from './isString'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isString).to.be.a.function()
	})
})
