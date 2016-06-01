
/* eslint-env mocha */
import expectTrue from './expectTrue'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectTrue).to.be.a.function()
	})
})
