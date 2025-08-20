# split-on-first

> Split a string on the first occurrence of a given separator

This is similar to [`String#split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), but that one splits on all the occurrences, not just the first one.

## Install

```sh
npm install split-on-first
```

## Usage

```js
import splitOnFirst from 'split-on-first';

splitOnFirst('a-b-c', '-');
//=> ['a', 'b-c']

splitOnFirst('key:value:value2', ':');
//=> ['key', 'value:value2']

splitOnFirst('a---b---c', '---');
//=> ['a', 'b---c']

splitOnFirst('a-b-c', '+');
//=> []

splitOnFirst('abc', '');
//=> []

splitOnFirst('a,b.c', /[.,]/);
//=> ['a', 'b.c']
```

## API

### splitOnFirst(string, separator)

#### string

Type: `string`

The string to split.

#### separator

Type: `string | RegExp`

The separator to split on. When a `RegExp` is provided, it splits on the first match.

## Related

- [split-at](https://github.com/sindresorhus/split-at) - Split a string at one or more indices
