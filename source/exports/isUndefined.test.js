/* eslint-env mocha */
import isUndefined from './isUndefined'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isUndefined', isUndefined)
})
