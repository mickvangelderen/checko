/* eslint-env mocha */
import expect from 'must'
import { strictEqual } from 'assert'
import cases from './cases'

function expectComparisonTest(compare, expectCall) {
	it('should export a function', () => {
		expect(expectCall).to.be.a.function()
	})

	const elegible = cases.filter(({ isObject, isOfTypeSymbol }) => !(isObject || isOfTypeSymbol))

	elegible.forEach(expected => {
		elegible.forEach(value => {
			if (compare(expected.value, value.value)) {
				it(`should accept (${expected.name}, ${value.name})`, () => {
					const result = expectCall.call(null, expected.value, value.value)
					if (value.value === value.value) {
						strictEqual(result, value.value)
					}
				})
			} else {
				it(`should reject (${expected.name}, ${value.name})`, () => {
					expect(() =>
						expectCall.call(null, expected.value, value.value)
					).to.throw()
				})
			}
		})
	})
}

export default expectComparisonTest
