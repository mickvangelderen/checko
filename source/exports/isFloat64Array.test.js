/* eslint-env mocha */
import isFloat64Array from './isFloat64Array'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeFloat64Array', isFloat64Array)
})
