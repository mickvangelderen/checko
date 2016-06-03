/* eslint-env mocha */
import isNegativeInfinity from './isNegativeInfinity'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isNegativeInfinity', isNegativeInfinity)
})
