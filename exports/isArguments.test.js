
/* eslint-env mocha */
import isArguments from './isArguments'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isArguments).to.be.a.function()
	})
})
