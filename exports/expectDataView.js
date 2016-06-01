const inspect = require('./inspect')
const isDataView = require('./isDataView')

function expectDataView(value) {
	if (isDataView(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a DataView.`)
}

module.exports = expectDataView
