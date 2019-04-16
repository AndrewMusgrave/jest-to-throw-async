const toThrowAsync = require('./to-throw-async')

const jestExpect = global.expect

if (jestExpect) {
  jestExpect.extend({ toThrowAsync })
} else {
  console.error(
    "Unable to extend Jest's expect. Please check your configutation."
  )
}
