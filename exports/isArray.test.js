
/* eslint-env mocha */
import isArray from './isArray'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isArray).to.be.a.function()
	})
})
