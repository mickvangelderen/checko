import inspect from './inspect'

function expectNull(value) {
	if (value === null) return value
	throw new TypeError(`Expected ${inspect(value)} to equal null.`)
}

export default expectNull
