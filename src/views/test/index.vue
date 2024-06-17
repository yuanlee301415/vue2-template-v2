<template>
    <div>
        <h2>Test</h2>
        <details open>
            <summary>硬编码</summary>
            <table width="100%" border="1" cellpadding="0" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user of users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>
                            <span v-if="user.role === CONSTANTS.USER_ROLE.ADMIN">管理员</span>
                            <span v-else-if="user.role === CONSTANTS.USER_ROLE.USER">普通用户</span>
                            <span v-else>未知</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </details>
    </div>
</template>

<script>
import { getUsersApi } from '@/api/user'
import { GenderEnum } from '@/constants'
import { USER_ROLE } from '@/constants'
import { User } from '@/models/User'

const CONSTANTS = Object.freeze({
    USER_ROLE
})

export default {
    name: 'Test',
    data() {
        return {
            CONSTANTS,
            users: null
        }
    },
    created() {
        getUsersApi().then((res) => {
            this.users = User.from(res)
            console.log('users:', this.users)
        })

        // Gender
        for (const item of GenderEnum) {
            console.log('Gender:', item)
        }
        console.log('MALE:', GenderEnum.MALE)
        console.log('MALE Label:', GenderEnum[GenderEnum.MALE])
    }
}
</script>
