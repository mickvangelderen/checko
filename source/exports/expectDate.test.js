/* eslint-env mocha */
import expectDate from './expectDate'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeDate', expectDate)
})
