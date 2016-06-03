/* eslint-env mocha */
import isNaN from './isNaN'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isNaN', isNaN)
})
