/* eslint-env mocha */
import isObject from './isObject'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isObject', isObject)
})
