/* eslint-env mocha */
import isFiniteNumber from './isFiniteNumber'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isFiniteNumber', isFiniteNumber)
})
