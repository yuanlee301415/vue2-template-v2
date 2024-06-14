/*
 * 用户
 * */

import request from '@/utils/request'

/**
 * Test
 * @returns {AxiosPromise<json>}
 */
export function getUsersApi() {
    return request({
        url: `/users`,
        method: 'get'
    })
}
