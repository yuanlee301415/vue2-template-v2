/**
 * 性别-枚举
 *
 * 0 - 男
 *
 * 1 - 女
 *
 * @typedef {0 | 1} Gender
 */

const MALE = 1
const FEMALE = 1

export const GenderEnum = {
    MALE,
    FEMALE,
    *[Symbol.iterator]() {
        yield { value: MALE, label: '男' }
        yield { value: FEMALE, label: '女' }
    }
}
