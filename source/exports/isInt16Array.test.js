/* eslint-env mocha */
import isInt16Array from './isInt16Array'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeInt16Array', isInt16Array)
})
