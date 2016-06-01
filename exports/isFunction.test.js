
/* eslint-env mocha */
import isFunction from './isFunction'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isFunction).to.be.a.function()
	})
})
