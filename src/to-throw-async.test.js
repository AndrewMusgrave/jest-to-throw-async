const toThrowAsync = require('./to-throw-async')

expect.extend({ toThrowAsync })

describe('toThrowAsync', () => {
  describe('with error provided', () => {
    it('throws error', async () => {
      async function throws() {
        throw new Error()
      }

      async function fn() {
        await throws()
      }

      await expect(fn).toThrowAsync(new Error())
    })

    it('handles not', async () => {
      async function throws() {
        throw new Error()
      }

      async function fn() {
        await throws()
      }

      await expect(fn).not.toThrowAsync(new Error('Hello'))
    })
  })

  describe('without error provided', () => {
    it('throws error', async () => {
      async function throws() {
        throw new Error()
      }

      async function fn() {
        await throws()
      }

      await expect(fn).toThrowAsync()
    })

    it('handles not', async () => {
      async function noop() {
        return
      }

      async function fn() {
        await noop()
      }

      await expect(fn).not.toThrowAsync()
    })
  })
})
