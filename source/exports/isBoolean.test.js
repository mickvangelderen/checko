
/* eslint-env mocha */
import isBoolean from './isBoolean'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isBoolean).to.be.a.function()
	})
})
