
/* eslint-env mocha */
import expectMoreThan from './expectMoreThan'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectMoreThan).to.be.a.function()
	})
})
