
/* eslint-env mocha */
import expectNumber from './expectNumber'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectNumber).to.be.a.function()
	})
})
