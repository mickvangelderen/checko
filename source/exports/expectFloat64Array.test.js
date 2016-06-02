
/* eslint-env mocha */
import expectFloat64Array from './expectFloat64Array'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectFloat64Array).to.be.a.function()
	})
})
