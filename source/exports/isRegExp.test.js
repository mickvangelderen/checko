/* eslint-env mocha */
import isRegExp from './isRegExp'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeRegExp', isRegExp)
})
