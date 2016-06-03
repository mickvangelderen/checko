/* eslint-env mocha */
import isUint32Array from './isUint32Array'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeUint32Array', isUint32Array)
})
