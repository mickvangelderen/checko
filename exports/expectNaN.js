import inspect from './inspect'

function expectNaN(value) {
	if (isNaN(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be NaN.`)
}

export default expectNaN
