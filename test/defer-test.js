'use strict';

import Defer from '../src/defer'
import assert from 'assert'
import 'babel-polyfill'


/*
 * Tests
 */
describe('Defer constructor pass params type check', () => {
  it("Defer constructor must be callable.", () => {
    assert.equal(
      new Defer({}),
      'Defer constructor params must be callable.',
      "Defer constructor must be callable."
    );
  });
});
