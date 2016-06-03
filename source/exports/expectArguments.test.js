/* eslint-env mocha */
import expectArguments from './expectArguments'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeArguments', expectArguments)
})
