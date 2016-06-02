import inspect from './inspect'

function expectAtMost(most, value) {
	if (value <= most) return value
	throw new RangeError(`Expected ${inspect(value)} to be at most ${inspect(most)}.`)
}

export default expectAtMost
