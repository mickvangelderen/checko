/* eslint-env mocha */
import isFunction from './isFunction'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isFunction', isFunction)
})
