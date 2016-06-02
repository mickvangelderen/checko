
/* eslint-env mocha */
import isUndefined from './isUndefined'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isUndefined).to.be.a.function()
	})
})
