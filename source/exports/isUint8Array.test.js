/* eslint-env mocha */
import isUint8Array from './isUint8Array'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeUint8Array', isUint8Array)
})
