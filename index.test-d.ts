import {expectType} from 'tsd-check';
import splitOnFirst from '.';

const split = splitOnFirst('abcbc', 'b');
expectType<string>(split[0]);
expectType<string | undefined>(split[1]);
