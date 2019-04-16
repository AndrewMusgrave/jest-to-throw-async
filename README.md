# toThrowAsync

A jest matcher to catch errors in asynchronous functions.

## Installation

```bash
npm install --save-dev jest-to-throw-async
```

### Yarn

```bash
yard add -D jest-to-throw-async
```

## Setup

Add jest-to-throw-async to your Jest configuration.

For example:

```js
// jest config
"jest": {
  "setupFilesAfterEnv": ["<rootDir>/test/setup.js"],
}
```

```js
// test/setup.js
require('jest-to-throw-async')
```

### Typescript

If you need types add a declaration file and import `jest-to-throw-async`.

```ts
// global.d.ts
import 'jest-extended'
```

## API

### toThrowAsync(error)

| Param | Type           | Default | Description                     |
| ----- | -------------- | ------- | ------------------------------- |
| error | Optional Error |         | Optional error to match against |

```js
test('throws error', async () => {
  async function throws() {
    throw new Error()
  }

  async function fn() {
    await throws()
  }

  await expect(fn).toThrowAsync()
})
```
