/* eslint-env mocha */
import expectUint8Array from './expectUint8Array'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeUint8Array', expectUint8Array)
})
