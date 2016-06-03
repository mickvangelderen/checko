/* eslint-env mocha */
import isMap from './isMap'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeMap', isMap)
})
