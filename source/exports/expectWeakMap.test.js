
/* eslint-env mocha */
import expectWeakMap from './expectWeakMap'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectWeakMap).to.be.a.function()
	})
})
