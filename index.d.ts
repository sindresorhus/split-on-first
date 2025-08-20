/**
Split a string on the first occurrence of a given separator.

@param string - The string to split.
@param separator - The separator to split on. When a `RegExp` is provided, it splits on the first match.

@example
```
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
*/
export default function splitOnFirst(
	string: string,
	separator: string | RegExp
): [string, string?];
