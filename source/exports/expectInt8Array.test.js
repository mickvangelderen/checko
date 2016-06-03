/* eslint-env mocha */
import expectInt8Array from './expectInt8Array'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeInt8Array', expectInt8Array)
})
