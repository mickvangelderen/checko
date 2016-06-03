/* eslint-env mocha */
import isBoolean from './isBoolean'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isBoolean', isBoolean)
})
