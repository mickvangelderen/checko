/* eslint-env mocha */
import expectTruthy from './expectTruthy'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isTruthy', expectTruthy)
})
