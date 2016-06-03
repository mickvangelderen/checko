/* eslint-env mocha */
import isArguments from './isArguments'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeArguments', isArguments)
})
