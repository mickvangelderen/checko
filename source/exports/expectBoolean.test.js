/* eslint-env mocha */
import expectBoolean from './expectBoolean'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isBoolean', expectBoolean)
})
