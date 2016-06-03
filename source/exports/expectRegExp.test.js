/* eslint-env mocha */
import expectRegExp from './expectRegExp'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeRegExp', expectRegExp)
})
