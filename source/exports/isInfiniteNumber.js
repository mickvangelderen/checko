import isNumber from './isNumber'

function isInfiniteNumber(value) {
	return isNumber(value) && isFinite(value)
}

export default isInfiniteNumber
