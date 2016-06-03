/* eslint-env mocha */
import expectFiniteNumber from './expectFiniteNumber'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isFiniteNumber', expectFiniteNumber)
})
