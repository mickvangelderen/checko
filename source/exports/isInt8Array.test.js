/* eslint-env mocha */
import isInt8Array from './isInt8Array'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeInt8Array', isInt8Array)
})
