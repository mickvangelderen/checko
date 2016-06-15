/* eslint-env mocha */
import isFiniteNumber from './isFiniteNumber'
import { _isFiniteNumberPolyfill } from './isFiniteNumber'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isFiniteNumber', isFiniteNumber)
	isTypeTest('isFiniteNumber', _isFiniteNumberPolyfill)
})
