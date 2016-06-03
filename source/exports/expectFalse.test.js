/* eslint-env mocha */
import expectFalse from './expectFalse'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isFalse', expectFalse)
})
