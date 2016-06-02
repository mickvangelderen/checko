
/* eslint-env mocha */
import expectDeepEqual from './expectDeepEqual'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectDeepEqual).to.be.a.function()
	})
})
