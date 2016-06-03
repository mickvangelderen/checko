/* eslint-env mocha */
import isString from './isString'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isString', isString)
})
