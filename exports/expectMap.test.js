
/* eslint-env mocha */
import expectMap from './expectMap'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectMap).to.be.a.function()
	})
})
