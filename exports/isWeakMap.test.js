
/* eslint-env mocha */
import isWeakMap from './isWeakMap'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(isWeakMap).to.be.a.function()
	})
})
