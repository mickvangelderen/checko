/* eslint-env mocha */
const expect = require('must')
const inspect = require('util').inspect

function testCases(func, cases) {
	cases.forEach(current => {
		const { name, input } = current
		expect(name).to.be.a.string()
		expect(input).to.be.an.array()
		const hasOutput = current.hasOwnProperty('output')
		const hasThrows = current.hasOwnProperty('throws')
		if (hasOutput && !hasThrows) {
			it(`should accept ${name}`, () => {
				expect(func.apply(null, input)).to.eql(current.output)
			})
		} else if (!hasOutput && hasThrows) {
			it(`should reject ${name}`, () => {
				try {
					func.apply(null, input)
					throw new Error(`Expected ${inspect(func)} to throw ${inspect(current.throws)}.`)
				} catch (error) {
					expect(error).to.have.ownProperty('message', current.throws)
				}
			})
		} else {
			throw new Error(`Invalid test case ${inspect(current)}, requires either output or throws property.`)
		}
	})
}

module.exports = testCases
