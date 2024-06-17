/**
 * 对话
 */
export class Conversation {
    /**
     * 对话 ID
     * @type {string}
     */
    id

    /**
     * 对话名称
     * @type {string}
     */
    name

    /**
     * 创建时间
     * @type {timestamp}
     */
    created_at

    constructor(_) {
        const { id, name, created_at } = { ..._ }
        this.id = id
        this.name = name
        this.created_at = created_at
    }

    /**
     * 批量实例化
     * @param {Conversation[]} list
     * @returns {Conversation[]}
     */
    static from(list) {
        return list && list.map((_) => new this(_))
    }
}
