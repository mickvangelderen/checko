const objectToString = Object.prototype.toString

const isArray = Array.isArray
	? Array.isArray
	: function isArray(value) {
		objectToString.call(value) === '[object Array]'
	}

module.exports = isArray
