import test from 'ava';
import splitOnFirst from './index.js';

test('main', t => {
	t.deepEqual(splitOnFirst('a-b-c', '-'), ['a', 'b-c']);
	t.deepEqual(splitOnFirst('key:value:value2', ':'), ['key', 'value:value2']);
	t.deepEqual(splitOnFirst('a---b---c', '---'), ['a', 'b---c']);
	t.deepEqual(splitOnFirst('a-b-c', '+'), []);
	t.deepEqual(splitOnFirst('abc', ''), []);
	t.deepEqual(splitOnFirst('', ''), []);

	t.throws(() => {
		splitOnFirst('abc', null);
	}, {
		instanceOf: TypeError,
		message: 'Expected `separator` to be of type `string` or `RegExp`',
	});
});

test('regex', t => {
	t.deepEqual(splitOnFirst('a,b,c', /[.,]/), ['a', 'b,c']);
	t.deepEqual(splitOnFirst('abc', /z/), []);
	t.deepEqual(splitOnFirst('hello world test', /\s/), ['hello', 'world test']);
	t.deepEqual(splitOnFirst('a+b+c', /\+/), ['a', 'b+c']);
	t.deepEqual(splitOnFirst('aaa-bbb', /a+/), ['', '-bbb']);
	t.deepEqual(splitOnFirst('Hello-World', /hello/i), ['', '-World']);
	t.deepEqual(splitOnFirst('a-b-c-d', /-/g), ['a', 'b-c-d']);
	t.deepEqual(splitOnFirst('hello🚀world', /🚀/), ['hello', 'world']);
});
