/* eslint-env mocha */
import expectUndefined from './expectUndefined'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isUndefined', expectUndefined)
})
