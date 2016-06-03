/* eslint-env mocha */
import expectError from './expectError'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeError', expectError)
})
