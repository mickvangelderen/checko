/* eslint-env mocha */
import expectNumber from './expectNumber'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isNumber', expectNumber)
})
