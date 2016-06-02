
/* eslint-env mocha */
import expectSet from './expectSet'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectSet).to.be.a.function()
	})
})
