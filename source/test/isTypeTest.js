/* eslint-env mocha */
import expect from 'must'
import cases from './cases'

function isTypeTest(predicateKey, isCall) {
	it('should export a function', () => {
		expect(isCall).to.be.a.function()
	})

	cases.forEach(value => {
		if (value[predicateKey]) {
			it(`should return true for ${value.name}`, () => {
				expect(isCall.call(null, value.value)).to.be.true()
			})
		} else {
			it(`should return false for ${value.name}`, () => {
				expect(isCall.call(null, value.value)).to.be.false()
			})
		}
	})
}

export default isTypeTest
