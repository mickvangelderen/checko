import inspect from './inspect'
import isDataView from './isDataView'

function expectDataView(value) {
	if (isDataView(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a DataView.`)
}

export default expectDataView
