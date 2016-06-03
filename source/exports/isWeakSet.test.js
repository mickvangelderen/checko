/* eslint-env mocha */
import isWeakSet from './isWeakSet'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeWeakSet', isWeakSet)
})
