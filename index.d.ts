/**
 * Split a string on the first occurrence of a given separator.
 * 
 * @param string - The string to split.
 * @param separator - The separator to split on.
 * @returns The string split on the separator, if possible.
 */
declare function splitOnFirst(string: string, separator: string): [string, string?];

export default splitOnFirst;
