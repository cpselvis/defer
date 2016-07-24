'use strict';

import Defer from '../src/defer'
import assert from 'assert'
import 'babel-polyfill'


/*
 * Tests
 */
describe('Defer constructor pass params type check', () => {
  it("Defer constructor must be callable.", () => {

    const defer = new Defer(function (resolve, reject) {
      resolve("1");
    });

    defer.then(function (data) {
      console.log(data);
      return data;
    }).then(function (data) {
      if (data === '1') {
        return '2'
      }
    }).catch(function (e) {
      console.log(e);
    });

    assert.equal(
      new Defer(function() {}),
      'Defer constructor params must be callable.',
      "Defer constructor must be callable."
    );
  });
});
