
/* eslint-env mocha */
import expectSymbol from './expectSymbol'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectSymbol).to.be.a.function()
	})
})
