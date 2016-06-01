
/* eslint-env mocha */
import isSet from './isSet'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isSet).to.be.a.function()
	})
})
