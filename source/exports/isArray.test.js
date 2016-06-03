/* eslint-env mocha */
import isArray from './isArray'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeArray', isArray)
})
