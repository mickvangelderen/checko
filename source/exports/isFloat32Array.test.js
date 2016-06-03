/* eslint-env mocha */
import isFloat32Array from './isFloat32Array'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeFloat32Array', isFloat32Array)
})
