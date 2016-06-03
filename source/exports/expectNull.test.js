/* eslint-env mocha */
import expectNull from './expectNull'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isNull', expectNull)
})
