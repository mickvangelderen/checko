
/* eslint-env mocha */
import expectGeneratorFunction from './expectGeneratorFunction'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectGeneratorFunction).to.be.a.function()
	})
})
