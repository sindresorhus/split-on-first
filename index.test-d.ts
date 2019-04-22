import {expectType} from 'tsd';
import splitOnFirst = require('.');

expectType<[string, string?]>(splitOnFirst('a-b-c', '-'));
