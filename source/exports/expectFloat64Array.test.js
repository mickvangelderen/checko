/* eslint-env mocha */
import expectFloat64Array from './expectFloat64Array'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeFloat64Array', expectFloat64Array)
})
