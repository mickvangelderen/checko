
/* eslint-env mocha */
import expectWeakSet from './expectWeakSet'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectWeakSet).to.be.a.function()
	})
})
