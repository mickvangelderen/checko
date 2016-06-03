/* eslint-env mocha */
import isInt32Array from './isInt32Array'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeInt32Array', isInt32Array)
})
