/* eslint-env mocha */
import isWeakMap from './isWeakMap'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeWeakMap', isWeakMap)
})
