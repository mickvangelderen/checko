/* eslint-env mocha */
import expectOwnProperty from './expectOwnProperty'
import expect from 'must'
import relativePath from '../test/relativePath'

describe(relativePath(__filename), () => {
	it('should export a function', () => {
		expect(expectOwnProperty).to.be.a.function()
	})

	it('should accept objects with the property on itself', () => {
		expectOwnProperty('a', { a: 1 })
	})

	it('should reject objects without the property on itself', () => {
		expect(() => expectOwnProperty('b', { a: 1 })).to.throw()
		expect(() => {
			function Cat() {}
			Cat.prototype.tail = true
			expectOwnProperty('tail', new Cat())
		}).to.throw()
	})
})
