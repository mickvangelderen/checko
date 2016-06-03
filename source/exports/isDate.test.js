/* eslint-env mocha */
import isDate from './isDate'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeDate', isDate)
})
