import inspect from './inspect'

function expectNull(value) {
	if (value === null) return value
	throw new RangeError(`Expected ${inspect(value)} to equal null.`)
}

export default expectNull
