/* eslint-env mocha */
import isUint8ClampedArray from './isUint8ClampedArray'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeUint8ClampedArray', isUint8ClampedArray)
})
