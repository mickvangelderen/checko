
/* eslint-env mocha */
import isObject from './isObject'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isObject).to.be.a.function()
	})
})
