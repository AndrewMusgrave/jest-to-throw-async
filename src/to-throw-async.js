const isEqual = require('lodash.isequal')

function message(error, expected) {
  return function() {
    return `
    \u001b[32mReceived: ${error}\x1b[39m
    \u001b[31mExpected: ${expected}\x1b[39m
    `
  }
}

async function getError(actual) {
  let error
  try {
    await actual()
  } catch (err) {
    error = err
  }

  return error
}

async function toThrowAsync(actual, expected) {
  const error = await getError(actual, expected)
  const pass = expected ? isEqual(error, expected) : Boolean(error)
  return { pass, message: message(error, expected) }
}

module.exports = toThrowAsync
