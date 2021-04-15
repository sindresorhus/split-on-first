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
		message: 'Expected the arguments to be of type `string`'
	});
});
