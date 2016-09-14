import { join } from 'path'
import { readFileSync } from 'fs'
import { writeFileSync } from 'fs'

function createTemplateFunction(name) {
  const template = readFileSync(join(__dirname, 'templates', `${name}.template.js`)).toString()
  return function(replacements) {
    return template.replace(/___([\w\d_]+)___/g, (match, key) => {
      if (typeof replacements[key] !== 'string') {
        throw new Error(`Expected replacement for ${match} to be a string but got ${replacements[key]}.`)
      }
      return replacements[key]
    })
  }
}

const assertionBinaryOperator = createTemplateFunction('assertionBinaryOperator')
const assertionBinaryOperatorTest = createTemplateFunction('assertionBinaryOperatorTest')
const assertionUnaryCondition = createTemplateFunction('assertionUnaryCondition')
const assertionUnaryConditionPolyfill = createTemplateFunction('assertionUnaryConditionPolyfill')
const assertionUnaryConditionTest = createTemplateFunction('assertionUnaryConditionTest')
const assertionUnaryString = createTemplateFunction('assertionUnaryString')
const assertionUnaryStringModernTest = createTemplateFunction('assertionUnaryStringModernTest')
const assertionUnaryStringPolyfill = createTemplateFunction('assertionUnaryStringPolyfill')
const assertionUnaryStringTest = createTemplateFunction('assertionUnaryStringTest')
const predicateBinaryOperator = createTemplateFunction('predicateBinaryOperator')
const predicateBinaryOperatorTest = createTemplateFunction('predicateBinaryOperatorTest')
const predicateUnaryCondition = createTemplateFunction('predicateUnaryCondition')
const predicateUnaryConditionPolyfill = createTemplateFunction('predicateUnaryConditionPolyfill')
const predicateUnaryConditionTest = createTemplateFunction('predicateUnaryConditionTest')
const predicateUnaryString = createTemplateFunction('predicateUnaryString')
const predicateUnaryStringModernTest = createTemplateFunction('predicateUnaryStringModernTest')
const predicateUnaryStringPolyfill = createTemplateFunction('predicateUnaryStringPolyfill')
const predicateUnaryStringTest = createTemplateFunction('predicateUnaryStringTest')

function binaryOperator(PREDICATE_NAME, ASSERTION_NAME, OPERATOR, TO_BE, TESTS) {
  const replacements = {
    PREDICATE_NAME,
    ASSERTION_NAME,
    OPERATOR,
    TO_BE,
    TESTS: TESTS.split('; ').map(s => '    ' + s).join('\n')
  }
  writeFileSync(`${PREDICATE_NAME}.js`     , predicateBinaryOperator(replacements)    )
  writeFileSync(`${PREDICATE_NAME}.test.js`, predicateBinaryOperatorTest(replacements))
  writeFileSync(`${ASSERTION_NAME}.js`     , assertionBinaryOperator(replacements)    )
  writeFileSync(`${ASSERTION_NAME}.test.js`, assertionBinaryOperatorTest(replacements))
}

function unaryCondition(PREDICATE_NAME, ASSERTION_NAME, CONDITION, TO_BE, TESTS) {
  const replacements = {
    PREDICATE_NAME,
    ASSERTION_NAME,
    CONDITION,
    TO_BE,
    TESTS: TESTS.split('; ').map(s => '    ' + s).join('\n')
  }
  writeFileSync(`${PREDICATE_NAME}.js`     , predicateUnaryCondition(replacements)    )
  writeFileSync(`${PREDICATE_NAME}.test.js`, predicateUnaryConditionTest(replacements))
  writeFileSync(`${ASSERTION_NAME}.js`     , assertionUnaryCondition(replacements)    )
  writeFileSync(`${ASSERTION_NAME}.test.js`, assertionUnaryConditionTest(replacements))
}

function unaryConditionPolyfill(PREDICATE_NAME, ASSERTION_NAME, CONDITION, TO_BE, TESTS, TARGET) {
  const replacements = {
    PREDICATE_NAME,
    ASSERTION_NAME,
    CONDITION,
    TO_BE,
    TESTS: TESTS.split('; ').map(s => '    ' + s).join('\n'),
    TARGET
  }
  writeFileSync(`${PREDICATE_NAME}.js`     , predicateUnaryConditionPolyfill(replacements))
  writeFileSync(`${PREDICATE_NAME}.test.js`, predicateUnaryConditionTest(replacements)    )
  writeFileSync(`${ASSERTION_NAME}.js`     , assertionUnaryConditionPolyfill(replacements))
  writeFileSync(`${ASSERTION_NAME}.test.js`, assertionUnaryConditionTest(replacements)    )
}

function unaryString(PREDICATE_NAME, ASSERTION_NAME, OBJECT, TESTS) {
  const replacements = {
    PREDICATE_NAME,
    ASSERTION_NAME,
    OBJECT,
    TO_BE: `a${/^[aeiou]/.test(OBJECT) ? 'n' : ''} ${OBJECT}`,
    TESTS: TESTS.split('; ').map(s => '    ' + s).join('\n'),
  }
  writeFileSync(`${PREDICATE_NAME}.js`     , predicateUnaryString(replacements))
  writeFileSync(`${PREDICATE_NAME}.test.js`, predicateUnaryStringTest(replacements)    )
  writeFileSync(`${ASSERTION_NAME}.js`     , assertionUnaryString(replacements))
  writeFileSync(`${ASSERTION_NAME}.test.js`, assertionUnaryStringTest(replacements)    )
}

function unaryStringModern(PREDICATE_NAME, ASSERTION_NAME, OBJECT, TESTS) {
  const replacements = {
    PREDICATE_NAME,
    ASSERTION_NAME,
    OBJECT,
    TO_BE: `a${/^[aeiou]/.test(OBJECT) ? 'n' : ''} ${OBJECT}`,
    TESTS: TESTS.split('; ').map(s => '      ' + s).join('\n'),
  }
  writeFileSync(`${PREDICATE_NAME}.js`     , predicateUnaryString(replacements))
  writeFileSync(`${PREDICATE_NAME}.test.js`, predicateUnaryStringModernTest(replacements)    )
  writeFileSync(`${ASSERTION_NAME}.js`     , assertionUnaryString(replacements))
  writeFileSync(`${ASSERTION_NAME}.test.js`, assertionUnaryStringModernTest(replacements)    )
}

function unaryStringPolyfill(PREDICATE_NAME, ASSERTION_NAME, OBJECT, TESTS, TARGET) {
  const replacements = {
    PREDICATE_NAME,
    ASSERTION_NAME,
    OBJECT,
    TO_BE: `a${/^[aeiou]/.test(OBJECT) ? 'n' : ''} ${OBJECT}`,
    TESTS: TESTS.split('; ').map(s => '    ' + s).join('\n'),
    TARGET
  }
  writeFileSync(`${PREDICATE_NAME}.js`     , predicateUnaryStringPolyfill(replacements))
  writeFileSync(`${PREDICATE_NAME}.test.js`, predicateUnaryStringTest(replacements)    )
  writeFileSync(`${ASSERTION_NAME}.js`     , assertionUnaryStringPolyfill(replacements))
  writeFileSync(`${ASSERTION_NAME}.test.js`, assertionUnaryStringTest(replacements)    )
}

binaryOperator('areEqual'       , 'expectEqual'        , '===', 'strictly equal to'  , "p(1, 1); n(1, '1')"  )
binaryOperator('areInequal'     , 'expectInequal'      , '!==', 'strictly inequal to', "n(1, 1); p(1, '1')"  )
binaryOperator('areLooseEqual'  , 'expectLooseEqual'   , '==' , 'loosely equal to'   , "p(1, '1'); n(1, 2)"  )
binaryOperator('areLooseInequal', 'expectLooseInequal' , '!=' , 'loosely inequal to' , "n(1, '1'); p(1, 2)"  )
binaryOperator('isLessThan'     , 'expectLessThan'     , '<'  , 'less than'          , "p('a', 'b'); n(1, 1)")
binaryOperator('isMoreThan'     , 'expectMoreThan'     , '>'  , 'more than'          , "p('b', 'a'); n(1, 1)")
binaryOperator('isAtLeast'      , 'expectAtLeast'      , '>=' , 'at least'           , "p('a', 'a'); n(1, 2)")
binaryOperator('isAtMost'       , 'expectAtMost'       , '<=' , 'at most'            , "p('a', 'a'); n(2, 1)")

unaryCondition('isBoolean', 'expectBoolean', "typeof value === 'boolean'", 'true or false', "p(true); p(false); n(0); n(new Boolean(true))"                              )
unaryCondition('isFalse'  , 'expectFalse'  , 'value === false'           , 'false'        , "p(false); n(true); n(0)"                                                    )
unaryCondition('isTrue'   , 'expectTrue'   , 'value === true'            , 'true'         , "n(false); p(true); n(1)"                                                    )
unaryCondition('isFalsy'  , 'expectFalsy'  , '!value'                    , 'falsy'        , "p(false); p(null); p(undefined); p(0); n(1); n(true); n(new Boolean(false))")
unaryCondition('isTruthy' , 'expectTruthy' , 'Boolean(value)'            , 'truthy'       , "n(false); n(null); n(undefined); n(0); p(1); p(true); p(new Boolean(false))")

unaryCondition('isNegativeInfinity', 'expectNegativeInfinity', 'value === -Infinity'                               , '-\u221e', "p(-Infinity); n(Infinity); n(NaN)")
unaryCondition('isNegativeOne'     , 'expectNegativeOne'     , 'value === -1'                                      , '-1'     , "p(-1); n('-1')"                   )
unaryCondition('isNegativeZero'    , 'expectNegativeZero'    , "typeof value === 'number' && 1/value === -Infinity", '-0'     , "p(-0); n(0); n('-0')"             )
unaryCondition('isZero'            , 'expectZero'            , 'value === 0'                                       , '0'      , "p(0); p(-0); n('0'); n('-0')"     )
unaryCondition('isPositiveZero'    , 'expectPositiveZero'    , "typeof value === 'number' && 1/value === Infinity" , '+0'     , "p(0); n(-0); n('0')"              )
unaryCondition('isOne'             , 'expectOne'             , 'value === 1'                                       , '1'      , "p(1); n('1')"                     )
unaryCondition('isPositiveInfinity', 'expectPositiveInfinity', 'value === Infinity'                                , '+\u221e', "p(Infinity); n(-Infinity); n(NaN)")

unaryCondition        ('isNumber'            , 'expectNumber'            , "typeof value === 'number' && value === value"                       , 'a number'              , "p(-Infinity); p(-4.2); p(-1); p(-0); p(0); p(1); p(4.2); p(Infinity); n(NaN); n('1')"  )
unaryCondition        ('isPositive'          , 'expectPositive'          , 'value > 0'                                                          , 'positive'              , "n(-Infinity); n(-4.2); n(-1); n(-0); n(0); p(1); p(4.2); p(Infinity); n(NaN); p('1')"  )
unaryCondition        ('isPositiveNumber'    , 'expectPositiveNumber'    , "typeof value === 'number' && value > 0"                             , 'a positive number'     , "n(-Infinity); n(-4.2); n(-1); n(-0); n(0); p(1); p(4.2); p(Infinity); n(NaN); n('1')"  )
unaryCondition        ('isPositiveInteger'   , 'expectPositiveInteger'   , 'value === Math.floor(value) && value > 0 && value !== Infinity'     , 'a positive integer'    , "n(-Infinity); n(-4.2); n(-1); n(-0); n(0); p(1); n(4.2); n(Infinity); n(NaN); n('1')"  )
unaryCondition        ('isNegative'          , 'expectNegative'          , 'value < 0'                                                          , 'negative'              , "p(-Infinity); p(-4.2); p(-1); n(-0); n(0); n(1); n(4.2); n(Infinity); n(NaN); p('-1')" )
unaryCondition        ('isNegativeNumber'    , 'expectNegativeNumber'    , "typeof value === 'number' && value < 0"                             , 'a negative number'     , "p(-Infinity); p(-4.2); p(-1); n(-0); n(0); n(1); n(4.2); n(Infinity); n(NaN); n('-1')" )
unaryCondition        ('isNegativeInteger'   , 'expectNegativeInteger'   , 'value === Math.floor(value) && value < 0 && value !== -Infinity'    , 'a negative integer'    , "n(-Infinity); n(-4.2); p(-1); n(-0); n(0); n(1); n(4.2); n(Infinity); n(NaN); n('-1')" )
unaryCondition        ('isNonPositive'       , 'expectNonPositive'       , 'value <= 0'                                                         , 'non-positive'          , "p(-Infinity); p(-4.2); p(-1); p(-0); p(0); n(1); n(4.2); n(Infinity); n(NaN); p('-0')" )
unaryCondition        ('isNonPositiveNumber' , 'expectNonPositiveNumber' , "typeof value === 'number' && value <= 0"                            , 'a non-positive number' , "p(-Infinity); p(-4.2); p(-1); p(-0); p(0); n(1); n(4.2); n(Infinity); n(NaN); n('-0')" )
unaryCondition        ('isNonPositiveInteger', 'expectNonPositiveInteger', 'value === Math.floor(value) && value <= 0 && value !== -Infinity'   , 'a non-positive integer', "n(-Infinity); n(-4.2); p(-1); p(-0); p(0); n(1); n(4.2); n(Infinity); n(NaN); n('-0')" )
unaryCondition        ('isNonNegative'       , 'expectNonNegative'       , 'value >= 0'                                                         , 'non-negative'          , "n(-Infinity); n(-4.2); n(-1); p(-0); p(0); p(1); p(4.2); p(Infinity); n(NaN); p('0')"  )
unaryCondition        ('isNonNegativeNumber' , 'expectNonNegativeNumber' , "typeof value === 'number' && value >= 0"                            , 'a non-negative number' , "n(-Infinity); n(-4.2); n(-1); p(-0); p(0); p(1); p(4.2); p(Infinity); n(NaN); n('0')"  )
unaryCondition        ('isNonNegativeInteger', 'expectNonNegativeInteger', 'value === Math.floor(value) && value >= 0 && value !== Infinity'    , 'a non-negative integer', "n(-Infinity); n(-4.2); n(-1); p(-0); p(0); p(1); n(4.2); n(Infinity); n(NaN); n('0')"  )
unaryCondition        ('isEven'              , 'expectEven'              , '(value & 1) === 0 && value == Math.floor(value) && isFinite(value)' , 'even'                  , "n(-Infinity); n(-4.2); n(-1); p(-0); p(0); n(1); n(4.2); n(Infinity); n(NaN); p('0')"  )
unaryCondition        ('isEvenInteger'       , 'expectEvenInteger'       , '(value & 1) === 0 && value === Math.floor(value) && isFinite(value)', 'an even integer'       , "n(-Infinity); n(-4.2); n(-1); p(-0); p(0); n(1); n(4.2); n(Infinity); n(NaN); n('0')"  )
unaryCondition        ('isOdd'               , 'expectOdd'               , '(value & 1) === 1 && value == Math.floor(value)'                    , 'odd'                   , "n(-Infinity); n(-4.2); p(-1); n(-0); n(0); p(1); n(4.2); n(Infinity); n(NaN); p('1')"  )
unaryCondition        ('isOddInteger'        , 'expectOddInteger'        , '(value & 1) === 1 && value === Math.floor(value)'                   , 'an odd integer'        , "n(-Infinity); n(-4.2); p(-1); n(-0); n(0); p(1); n(4.2); n(Infinity); n(NaN); n('1')"  )
unaryCondition        ('isNaN'               , 'expectNaN'               , 'value !== value'                                                    , 'NaN'                   , "n(-Infinity); n(-4.2); n(-1); n(-0); n(0); n(1); n(4.2); n(Infinity); p(NaN); n('NaN')")
//                      isFinite(value) is an alias for the native isFinite.
unaryConditionPolyfill('isFiniteNumber'      , 'expectFiniteNumber'      , "typeof value === 'number' && isFinite(value)"                       , 'a finite number'       , "n(-Infinity); p(-4.2); p(-1); p(-0); p(0); p(1); p(4.2); n(Infinity); n(NaN); n('1')"  , 'Number.isFinite' )
unaryCondition        ('isInfinite'          , 'expectInfinite'          , 'value === Infinity || value === -Infinity'                          , 'an infinite number'    , "p(-Infinity); n(-4.2); n(-1); n(-0); n(0); n(1); n(4.2); p(Infinity); n(NaN); n('1')"  )
unaryCondition        ('isInteger'           , 'expectInteger'           , 'value == Math.floor(value) && isFinite(value)'                      , 'an integer'            , "n(-Infinity); n(-4.2); p(-1); p(-0); p(0); p(1); n(4.2); n(Infinity); n(NaN); p('1')"  )
unaryConditionPolyfill('isIntegerNumber'     , 'expectIntegerNumber'     , 'value === Math.floor(value) && isFinite(value)'                     , 'an integer number'     , "n(-Infinity); n(-4.2); p(-1); p(-0); p(0); p(1); n(4.2); n(Infinity); n(NaN); n('1')"  , 'Number.isInteger')

unaryCondition('isFunction'       , 'expectFunction'       , "typeof value === 'function'"                      , 'a function'        , "p(function() {}); n({})"                                  )
unaryCondition('isNullaryFunction', 'expectNullaryFunction', "typeof value === 'function' && value.length === 0", 'a nullary function', "p(() => {}); n(a => a); n((a, b) => b); n((a, b, c) => c)")
unaryCondition('isUnaryFunction'  , 'expectUnaryFunction'  , "typeof value === 'function' && value.length === 1", 'a unary function'  , "n(() => {}); p(a => a); n((a, b) => b); n((a, b, c) => c)")
unaryCondition('isBinaryFunction' , 'expectBinaryFunction' , "typeof value === 'function' && value.length === 2", 'a binary function' , "n(() => {}); n(a => a); p((a, b) => b); n((a, b, c) => c)")
unaryCondition('isTernaryFunction', 'expectTernaryFunction', "typeof value === 'function' && value.length === 3", 'a ternary function', "n(() => {}); n(a => a); n((a, b) => b); p((a, b, c) => c)")
unaryCondition('isObject'         , 'expectObject'         , "typeof value === 'object' && value !== null"      , 'an object'         , "p({}); n(null)"                                           )
unaryCondition('isString'         , 'expectString'         , "typeof value === 'string'"                        , 'a string'          , "p(''); n(1)"                                              )
unaryCondition('isEmptyString'    , 'expectEmptyString'    , "value === ''"                                     , 'an empty string'   , "p(''); n('a')"                                            )
unaryCondition('isNonEmptyString' , 'expectNonEmptyString' , "typeof value === 'string' && value.length > 0"    , 'a non-empty string', "n(''); p('a')"                                            )
unaryCondition('isSymbol'         , 'expectSymbol'         , "typeof value === 'symbol'"                        , 'a symbol'          , "p(Symbol('x')); n('x'); n({})"                            )
unaryCondition('isUndefined'      , 'expectUndefined'      , 'value === void 0'                                 , 'undefined'         , "p(void 0); n(null)"                                       )
unaryCondition('isNull'           , 'expectNull'           , 'value === null'                                   , 'null'              , "n(void 0); p(null)"                                       )

unaryString        ('isArguments'        , 'expectArguments'        , 'Arguments'        , 'p(function() { return arguments }()); n([])')
unaryStringPolyfill('isArray'            , 'expectArray'            , 'Array'            , 'p([]); n({ length: 0 })', 'Array.isArray'   )
//                   isEmptyArray is hand crafted.
//                   isNonEmptyArray is hand crafted.
unaryStringModern  ('isArrayBuffer'      , 'expectArrayBuffer'      , 'ArrayBuffer'      , 'p(new ArrayBuffer(0)); n({})'               )
unaryStringModern  ('isDataView'         , 'expectDataView'         , 'DataView'         , 'p(new DataView(new ArrayBuffer(0))); n({})' )
unaryString        ('isDate'             , 'expectDate'             , 'Date'             , 'p(new Date()); n({})'                       )
unaryString        ('isError'            , 'expectError'            , 'Error'            , "p(new Error()); n({ message: '' })"         )
unaryStringModern  ('isFloat32Array'     , 'expectFloat32Array'     , 'Float32Array'     , 'p(new Float32Array(0)); n({})'              )
unaryStringModern  ('isFloat64Array'     , 'expectFloat64Array'     , 'Float64Array'     , 'p(new Float64Array(0)); n({})'              )
//                   isGeneratorFunction is hand crafted.
unaryStringModern  ('isInt16Array'       , 'expectInt16Array'       , 'Int16Array'       , 'p(new Int16Array(0)); n({})'                )
unaryStringModern  ('isInt32Array'       , 'expectInt32Array'       , 'Int32Array'       , 'p(new Int32Array(0)); n({})'                )
unaryStringModern  ('isInt8Array'        , 'expectInt8Array'        , 'Int8Array'        , 'p(new Int8Array(0)); n({})'                 )
unaryStringModern  ('isMap'              , 'expectMap'              , 'Map'              , 'p(new Map()); n({})'                        )
unaryString        ('isRegExp'           , 'expectRegExp'           , 'RegExp'           , 'p(new RegExp()); n({})'                     )
unaryStringModern  ('isSet'              , 'expectSet'              , 'Set'              , 'p(new Set()); n({})'                        )
unaryStringModern  ('isUint16Array'      , 'expectUint16Array'      , 'Uint16Array'      , 'p(new Uint16Array(0)); n({})'               )
unaryStringModern  ('isUint32Array'      , 'expectUint32Array'      , 'Uint32Array'      , 'p(new Uint32Array(0)); n({})'               )
unaryStringModern  ('isUint8Array'       , 'expectUint8Array'       , 'Uint8Array'       , 'p(new Uint8Array(0)); n({})'                )
unaryStringModern  ('isUint8ClampedArray', 'expectUint8ClampedArray', 'Uint8ClampedArray', 'p(new Uint8ClampedArray(0)); n({})'         )
unaryStringModern  ('isWeakMap'          , 'expectWeakMap'          , 'WeakMap'          , 'p(new WeakMap()); n({})'                    )
unaryStringModern  ('isWeakSet'          , 'expectWeakSet'          , 'WeakSet'          , 'p(new WeakSet()); n({})'                    )
