
import {getLength,has} from './common';
import {reportExceptType} from '../type/reportExceptType';
import {isEmpty} from '../type/isEmpty';
import {toNumber} from '../type/toNumber';

/**
 * 获取第一个属性键名，没有则返回undefined。
 *
 * @param {Object} needle
 * @returns {(String|Undefined)}
 */
export const getFirstKey = (needle) => {
    reportExceptType('object', needle);

    return Object.keys(needle)[0];
};


/**
 * 获取最后一个属性键名，没有则返回undefined。
 *
 * @param {Object} needle
 * @returns {(String|Undefined)}
 */
export const getLastKey = (needle) => {
    reportExceptType('object', needle);

    return Object.keys(needle)[getLength(needle) - 1];
};


/**
 * 获取第一个属性，没有则返回undefined。
 *
 * @param {Object} needle
 * @returns {(Object|Undefined)}
 */
export const getFirstItem = (needle) => {
    reportExceptType('object', needle);

    if (isEmpty(needle)) {
        return undefined;
    }

    const index = 0;
    const key = Object.keys(needle)[index];
    const val = Object.values(needle)[index];
    let result = {};

    result[key] = val;

    return result;
};


/**
 * 获取最后一个属性，没有则返回undefined。
 *
 * @param {Object} needle
 * @returns {(Object|Undefined)}
 */
export const getLastItem = (needle) => {
    reportExceptType('object', needle);

    if (isEmpty(needle)) {
        return undefined;
    }

    const index = getLength(needle) - 1;
    const key = Object.keys(needle)[index];
    const val = Object.values(needle)[index];
    let result = {};

    result[key] = val;

    return result;
};


/**
 * 转化为数组
 *
 * @param {Object} needle
 * @param {Number} options 1：默认，对象所有属性值组成的数组；2：保留结构，外面套一层数组
 * @returns {Array}
 */
export const toArray = (needle, options) => {
    reportExceptType('object', needle);

    options = toNumber(options) || 1;

    let result = [];

    switch (options) {
        case 1:
            result = Object.values(needle);
            break;
        case 2:
            result = [needle];
            break;
    }

    return result;
};

/**
 * 检查对象是否存在某个key
 *
 * @param {Object} haystack
 * @param {(String|Number|Boolean)} needle
 * @returns {Boolean}
 */
export const hasKey = (haystack, needle) => {
    reportExceptType('object', haystack);
    reportExceptType(['string', 'number', 'boolean'], needle);

    return has(Object.keys(haystack), needle.toString());
};