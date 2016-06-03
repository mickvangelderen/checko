/* eslint-env mocha */
import expectFalsy from './expectFalsy'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isFalsy', expectFalsy)
})
