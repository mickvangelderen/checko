/* eslint-env mocha */
import isDataView from './isDataView'
import relativePath from '../test/relativePath'
import isTypeTest from '../test/isTypeTest'

describe(relativePath(__filename), () => {
	isTypeTest('isOfTypeDataView', isDataView)
})
