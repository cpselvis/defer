'use strict';

/**
 * @file Some useful functions.
 */
export default class Utils {
    /**
     * @brief Noop function.
     */
    static noop() {};


    /**
     * Check if an object is object type.
     * @param object
     * @returns {boolean}
     */
    static isObject(object) {
        return typeof object === 'object';
    }

    /**
     * Check if an object is function type
     * @param object
     * @returns {boolean}
     */
    static isCallable(object) {
        return typeof object === 'function';
    }

    /**
     * @brief Check a value is an array or not.
     * @param value
     * @returns {boolean}
     */
    static isArray(value) {
        return Object.prototype.toString.call(value) === "[object Array]";
    }

    /**
     * Check if obj is thenable or not
     * @param object
     * @returns {*|boolean}
     */
    static isThenAble(object) {
        return object && typeof object.then === 'function';
    }

}
