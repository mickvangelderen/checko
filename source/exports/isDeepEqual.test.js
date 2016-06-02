
/* eslint-env mocha */
import isDeepEqual from './isDeepEqual'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isDeepEqual).to.be.a.function()
	})
})
