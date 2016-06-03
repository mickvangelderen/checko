/* eslint-env mocha */
import expectFunction from './expectFunction'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isFunction', expectFunction)
})
