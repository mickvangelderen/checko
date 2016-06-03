/* eslint-env mocha */
import expect from 'must'
import cases from './cases'

function isComparisonTest(compare, isCall) {
	it('should export a function', () => {
		expect(isCall).to.be.a.function()
	})

	const elegible = cases.filter(({ isObject, isSymbol }) => !(isObject || isSymbol))

	elegible.forEach(expected => {
		elegible.forEach(value => {
			if (compare(expected.value, value.value)) {
				it(`should return true for (${expected.name}, ${value.name})`, () => {
					expect(isCall.call(null, expected.value, value.value)).to.be.true()
				})
			} else {
				it(`should return false for (${expected.name}, ${value.name})`, () => {
					expect(isCall.call(null, expected.value, value.value)).to.be.false()
				})
			}
		})
	})
}

export default isComparisonTest
