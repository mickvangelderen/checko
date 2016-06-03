/* eslint-env mocha */
import isPositiveInfinity from './isPositiveInfinity'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isPositiveInfinity', isPositiveInfinity)
})
