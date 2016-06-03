/* eslint-env mocha */
import expectString from './expectString'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isString', expectString)
})
