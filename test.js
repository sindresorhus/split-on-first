import test from 'ava';
import splitOnFirst from '.';

test('main', t => {
	t.deepEqual(splitOnFirst('a-b-c', '-'), ['a', 'b-c']);
	t.deepEqual(splitOnFirst('key:value:value2', ':'), ['key', 'value:value2']);
	t.deepEqual(splitOnFirst('a---b---c', '---'), ['a', 'b---c']);
	t.deepEqual(splitOnFirst('a-b-c', '+'), ['a-b-c']);
	t.deepEqual(splitOnFirst('abc', ''), ['abc']);
});
