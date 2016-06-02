
/* eslint-env mocha */
import isWeakSet from './isWeakSet'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isWeakSet).to.be.a.function()
	})
})
