/* eslint-env mocha */
import isArrayBuffer from './isArrayBuffer'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeArrayBuffer', isArrayBuffer)
})
