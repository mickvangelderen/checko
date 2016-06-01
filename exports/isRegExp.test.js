
/* eslint-env mocha */
import isRegExp from './isRegExp'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isRegExp).to.be.a.function()
	})
})
