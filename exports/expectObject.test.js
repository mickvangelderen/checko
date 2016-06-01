
/* eslint-env mocha */
import expectObject from './expectObject'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectObject).to.be.a.function()
	})
})
