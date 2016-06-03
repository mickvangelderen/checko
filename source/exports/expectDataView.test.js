/* eslint-env mocha */
import expectDataView from './expectDataView'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeDataView', expectDataView)
})
