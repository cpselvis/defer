'use strict';

/**
 * @file Defer     main file.
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
     *  @param func
     *
     */
    constructor(func) {
        // Params checking
        this._checkParam(func);
        this.func = func;
    }

    // Private API
    _checkParam(func) {
        /*Ensure promise use new keywords to create */
        if (!Utils.isFunction(func)) {
            throw new TypeError("Param must be a function");
        }
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
}