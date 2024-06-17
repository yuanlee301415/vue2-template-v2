/**
 * 性别 - 枚举
 *
 * 0 - 男
 *
 * 1 - 女
 *
 * @typedef {0 | 1} GenderEnum
 */

const MALE = 0
const FEMALE = 1

/**
 * 性别 Map
 * @type {Record<GenderEnum|'MALE'|'FEMALE', GenderEnum|'男'|'女'>}
 */
export const Gender = Object.freeze({
    MALE,
    FEMALE,
    [MALE]: '男',
    [FEMALE]: '女',
    *[Symbol.iterator]() {
        yield [MALE, this[MALE]]
        yield [FEMALE, this[FEMALE]]
    }
})
