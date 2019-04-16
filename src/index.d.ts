/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R> {
    toThrowAsync(error: Error): R;
  }
}
