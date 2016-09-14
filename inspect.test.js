/* eslint-env mocha */
import inspect from './inspect'
import expectFunction from './expectFunction'
import expectString from './expectString'

describe('inspect', () => {
	it('should export a function', () => {
		expectFunction(inspect)
	})

	it('should return a string', () => {
		expectString(inspect(inspect))
	})
})
