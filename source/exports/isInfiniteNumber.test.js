/* eslint-env mocha */
import isInfiniteNumber from './isInfiniteNumber'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isInfiniteNumber', isInfiniteNumber)
})
