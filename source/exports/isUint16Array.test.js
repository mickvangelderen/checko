/* eslint-env mocha */
import isUint16Array from './isUint16Array'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeUint16Array', isUint16Array)
})
