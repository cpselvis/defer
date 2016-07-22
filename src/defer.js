'use strict';

/**
 * @file Defer     main file. (Defer is just a state machine.)
 * Implement steps follow: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects.
 *
 * External invoke examples:
 * First step, create a defer instance:
 *      const defer = new Defer(function(resolve, reject) {        //  create defer instance:
            // do a thing, possibly async, then…
            if (fine) {                                            // everything turned out fine
                resolve("Stuff worked!");
            } else {
                reject(throw new Error("It broke"));
            }
         });
   Then, use defer:
         defer.then(function(result) {
            console.log(result);                                   // "Stuff worked!"
         }, function(err) {
            console.log(err);                                      // Error: "It broke"
         });
 *
 */

import Utils from './utils';

const PromiseState = '_PromiseState';
const PromiseResult = '_PromiseResult';
const PromiseFulfillReactions = '_PromiseFulfillReactions';
const PromiseRejectReactions = '_PromiseRejectReactions';


/* Promise three kinds of state */
const PENDING = 0;                              // Action related to defer not success or failed yet.
const FULFILLED = 1;                            // Action related to defer has succeed.
const REJECTED = 2;                             // Action related to defer


export default class Defer {

  /**
   * Promise constructor
   * Maintain a state machine.
   *
   * Notes:
   *    1,  Any promise object is in one of three mutually states: fulfilled, rejected and pending.
   *    2,  Pending state can transform to fulfilled or rejected state.
   *    3,  State can't transform between fulfilled and rejected.
   *
   *  @param executor       executor is a callback function, has two arguments:
   *                              1, resolve     The function that is used to resolve the given promise object
   *                              2, reject      The function that is used to reject the given promise object.
   *  @return               An object that is usable as a promise.
   */
  constructor(executor) {

    if (!(this instanceof Defer)) {
      throw new TypeError;
    }

    if (!Utils.isCallable(executor)) {
      throw TypeError("Defer constructor params must be callable.");
    }

    this[PromiseState] = PENDING;
    this[PromiseFulfillReactions] = [];
    this[PromiseRejectReactions] = [];

    const resolvingFunctions = this._createResolvingFunctions(this);
    try {
      executor(resolvingFunctions[0], resolvingFunctions[1]);
    } catch (e) {
      resolvingFunctions[1](e);
    }
  }


  _createResolvingFunctions(promise) {
    let _resolve, _reject;

    _resolve = (resolution) => {
      _resolve = _reject = noop;
      this._resolvePromise(promise, resolution);
    };

    _reject = (reason) => {
      _resolve = _reject = noop;
      this._rejectPromise(promise, reason);
    };

    return [function resolve(resolution) {
      _resolve(resolution);
    }, function reject(reason) {
      _reject(reason);
    }];
  }

  _resolvePromise(promise, resolution) {
    if (promise === resolution) {
      return this._rejectPromise(promise, new TypeError('Self Resolution Error.'));
    }

    if (!isObject(resolution)) {
      return this._fulfillPromise(promise, resolution);
    }

    let then;

    try {
      then = resolution.then;
    } catch (e) {
      return this._rejectPromise(promise, e);
    }

    if (!isCallable(then)) {
      return this._fulfillPromise(promise, resolution);
    }

    // To do.. Add then to promise jobs.
  }

  _rejectPromise(promise, reason) {
    const reactions = promise[PromiseRejectReactions];
    promise[PromiseResult] = reason;
    promise[PromiseFulfillReactions] = undefined;
    promise[PromiseRejectReactions] = undefined;
    promise[PromiseState] = REJECTED;
  }

  _fulfillPromise(promise, value) {
    const reactions = promise[PromiseFulfillReactions];
    promise[PromiseResult] = value;
    promise[PromiseFulfillReactions] = undefined;
    promise[PromiseRejectReactions] = undefined;
    promise[PromiseState] = FULFILLED;
  }

  //   Exposed API to external world.
  all() {

  }

  resolve() {

  }

  reject() {

  }

  race() {

  }

  then(onFulfilled, onRejected) {

  }

  catch() {

  }
}
