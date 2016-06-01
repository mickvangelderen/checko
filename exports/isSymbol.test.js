
/* eslint-env mocha */
import isSymbol from './isSymbol'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isSymbol).to.be.a.function()
	})
})
