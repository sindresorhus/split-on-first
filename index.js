export default function splitOnFirst(string, separator) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected `string` parameter to be of type `string`');
	}

	if (typeof separator !== 'string' && !(separator instanceof RegExp)) {
		throw new TypeError('Expected `separator` to be of type `string` or `RegExp`');
	}

	if (string === '' || (typeof separator === 'string' && separator === '')) {
		return [];
	}

	if (typeof separator === 'string') {
		const separatorIndex = string.indexOf(separator);
		if (separatorIndex === -1) {
			return [];
		}

		return [
			string.slice(0, separatorIndex),
			string.slice(separatorIndex + separator.length),
		];
	}

	// RegExp separator
	const flags = separator.flags.replace('g', '');
	const regex = new RegExp(separator.source, flags);
	const match = regex.exec(string);
	if (!match) {
		return [];
	}

	return [
		string.slice(0, match.index),
		string.slice(match.index + match[0].length),
	];
}
