/* eslint-env mocha */
import isSet from './isSet'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeSet', isSet)
})
