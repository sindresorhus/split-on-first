import {expectType} from 'tsd';
import splitOnFirst from './index.js';

expectType<[string, string?]>(splitOnFirst('a-b-c', '-'));
