
/* eslint-env mocha */
import isError from './isError'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isError).to.be.a.function()
	})
})
