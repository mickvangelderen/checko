/* eslint-env mocha */
import expectNaN from './expectNaN'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isNaN', expectNaN)
})
