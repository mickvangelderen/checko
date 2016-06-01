
/* eslint-env mocha */
import expectNaN from './expectNaN'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectNaN).to.be.a.function()
	})
})
