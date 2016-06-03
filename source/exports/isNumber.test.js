/* eslint-env mocha */
import isNumber from './isNumber'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isNumber', isNumber)
})
