# defer

* A lightweighted promise library follow Promise / A+ standards.

[![NPM version](https://img.shields.io/npm/v/defer-js.svg?style=flat-square)](https://www.npmjs.com/package/defer-js)
[![Build Status](https://travis-ci.org/cpselvis/defer.svg?branch=master)](https://travis-ci.org/cpselvis/defer)
[![Coverage Status](https://coveralls.io/repos/github/cpselvis/defer-js/badge.svg?branch=master)](https://coveralls.io/github/cpselvis/defer-js?branch=master)

I think if you want to build your own promise, the main part is to maintain a state machine, you should know how to transform state between pending,
fulfilled and rejected.

## Promise standard:
  Promise/A+

## Reference:
-     H5 rocks promise tutorials(http://www.html5rocks.com/en/tutorials/es6/promises/)
-     Open source Promise/A+ standard(https://promisesaplus.com/)
-     ECMAScript language specification ECMA-262 6th edition promise part(http://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects).

## Realize step:
-     How to realize resolve, reject, then base on https://github.com/promises-aplus/promises-spec

## Features that the library contains:
-     parallel promise

## Support:
-    Both Browser and Node.js environment.

## To do...
-     I will use mocha to write some case later.
