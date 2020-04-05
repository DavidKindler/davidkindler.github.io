---
title: 'Know enough about Jest to be dangerous'
cover: ./js-testing.png
slug: know-enough-about-jest
date: 2020-01-14
category: javacript
tags:
  - javascript
  - testing
  - react
---

## What is Jest?

Jest is a javascript test runner. Simply put, it is a library that can be used to run and structure your javascript tests. It can be used with vanilla JS, React, Vue, Angular, Typescript, etc. It joins the ranks of other testing frameworks such as Mocha, Karma, and Jasmine.

Jest was developed and maintained by Facebook and is ranked highly on Github. It comes complete with many utilities such as mocks and spies. If you are coding in React and use the [create-react-app](https://create-react-app.dev/) package, Jest is preinstalled and preconfigured for you.

## Javascript testing

Testing your code means that we check for expectations. We expect that a function, given certain inputs, will return certain outputs. In Jest, we use `expect` method to check that the values we are looking for are meeting are expectations.

Jest has many ways of doing this. Here is a very simple example:

```js
function multiplyBy2 (num) {
  return num * 2
}

test('function returns correct value', () => {
  expect(multiplyBy2(2)).toBe(4)
})
```

You can find a complete list of methods for expect here: [https://jestjs.io/docs/en/expect#methods](https://jestjs.io/docs/en/expect#methods)

## Configuring Jest

Out of the box Jest needs little configuration. For basic unit testing you can simply write your tests and run them. Once you get more familiar you will want to adjust how Jest runs your tests. For example, you may want to exclude certain files or directories from being tested. Or, you may want to specify only certain file patterns or directories to be tested. You get the idea.

There are two main ways to configure Jest. You can use the package.json file or you can have a special jest.config.js file. The options are the same.

For the package.json file you will setup a `"jest"` top level key which will contain the list of options.

```json
{
  "name": "my github project",
  "jest": {
    "testPathIgnorePatterns": ["<rootDir>/node_modules/"]
  },
  "roots": ["src"]
}
```

The jest.config.js file is basically the same except that it is setup as an exported module.

```js
module.exports = {
  roots: ['src'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/']
}
```

For more configuration options please check the docs here: [https://jestjs.io/docs/en/configuration](https://jestjs.io/docs/en/configuration)

## Running tests

As mentioned before Jest will run any tests it can find write out the box. It will look for any files that end with `.spec.js` or `.test.js`

It will also test files in directories labeled `__tests__`

If you have Jest installed globally you can type `jest` in your terminal and jest will begin its search.

Jest has a number of CLI options that can help you. It can, for example, be put in `--watch` mode. This will watch files for changes and rerun tests only on files that were modified or impacted by code changes. This is a very handy option if you are coding using the [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) process.

For a complete list of CLI options please check the docs here: [https://jestjs.io/docs/en/cli](https://jestjs.io/docs/en/cli)

## Writing tests

Jest tests can be run individually as shown above using the `test` or `it` function. `it` is an alias of `test` and is exactly the same. In Jest it is conventional to use the `test` method.

Jest tests can be grouped into test suites. We use the `describe` function to create a block of tests grouped together.

For example:

```js
describe('test function methods', () => {
  test('returns true', () => {
    expect(myFunction.tobeTrue()).toBeTruthy()
  })

  test('returns false', () => {
    expect(myFunction.toBeFalse()).toBeFalsy()
  })
})
```

You can also next `describe` blocks. For example:

```js
describe('test function methods', () => {
  describe('test boolean functions', () => {
    test('returns true', () => {
      expect(myFunction.tobeTrue()).toBeTruthy()
    })

    test('returns false', () => {
      expect(myFunction.toBeFalse()).toBeFalsy()
    })
  })

  describe('test some other method', () => {
    test('multiplyBy2 returns correct value', () => {
      expect(myFunction.multiplyBy2(2)).toBe(4)
    })
  })
})
```
