import inspect from './inspect'
import hasOwnProperty from './hasOwnProperty'

function expectOwnProperty(name, value) {
	if (hasOwnProperty(name, value)) return value
	throw new TypeError(`Expected ${inspect(value)} to have own property ${inspect(name)}.`)
}

export default expectOwnProperty
