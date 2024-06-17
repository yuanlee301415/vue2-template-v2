/**
 * 用户 Model
 * @class User
 */
export class User {
    /**
     * 用户 ID
     * @type {string}
     */
    id

    /**
     * 用户名称
     * @type {string}
     */
    name

    /**
     * 用户角色
     * @type {string}
     */
    role

    /**
     * 邮箱
     * @type {string}
     */
    email

    /**
     * 性别
     * @type {GenderEnum}
     */
    gender

    /**
     * 创建时间
     * @type {timestamp}
     */
    created_at

    constructor(_) {
        const { id, name, role, email, gender, created_at } = { ..._ }
        this.id = id
        this.name = name
        this.role = role
        this.email = email
        this.gender = gender
        this.created_at = created_at
    }

    /**
     * 批量实例化
     * @param {User[]} list
     * @returns {User[]}
     */
    static from(list) {
        return list && list.map((_) => new this(_))
    }
}
