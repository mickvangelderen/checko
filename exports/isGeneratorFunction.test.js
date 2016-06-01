
/* eslint-env mocha */
import isGeneratorFunction from './isGeneratorFunction'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isGeneratorFunction).to.be.a.function()
	})
})
