/* eslint-env mocha */
import expectFloat32Array from './expectFloat32Array'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeFloat32Array', expectFloat32Array)
})
