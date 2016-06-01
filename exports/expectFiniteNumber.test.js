
/* eslint-env mocha */
import expectFiniteNumber from './expectFiniteNumber'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFiniteNumber).to.be.a.function()
	})
})
