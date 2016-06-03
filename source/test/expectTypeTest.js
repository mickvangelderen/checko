/* eslint-env mocha */
import expect from 'must'
import { strictEqual } from 'assert'
import cases from './cases'

function expectTypeTest(predicateKey, expectCall) {
	it('should export a function', () => {
		expect(expectCall).to.be.a.function()
	})

	cases.forEach(value => {
		if (value[predicateKey]) {
			it(`should accept ${value.name}`, () => {
				const result = expectCall.call(null, value.value)
				if (value.value === value.value) {
					strictEqual(result, value.value)
				}
			})
		} else {
			it(`should reject ${value.name}`, () => {
				expect(() =>
					expectCall.call(null, value.value)
				).to.throw()
			})
		}
	})
}

export default expectTypeTest
