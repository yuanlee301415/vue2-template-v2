<!--
Test page
-->

<template>
    <div>
        <h2>Test</h2>
        <details open>
            <summary>硬编码 & 枚举</summary>
            <form>
                <label>
                    <span>Gender:</span>
                    <select v-model="formData.gender">
                        <option v-for="[value, label] of CONSTANTS.Gender" :key="value" :value="value">{{ label }}</option>
                    </select>
                </label>
                <pre>{{ formData }}</pre>
            </form>
            <table width="100%" border="1" cellpadding="5" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Gender</th>
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
                        <td>{{ CONSTANTS.Gender[user.gender] }}</td>
                    </tr>
                </tbody>
            </table>
        </details>

        <details open>
            <summary>App store</summary>
            <select v-model="appTheme" @change="handleToggleTheme">
                <option value="normal">Normal</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </details>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUsersApi } from '@/api/user'
import { Gender } from '@/constants'
import { USER_ROLE } from '@/constants'
import { User } from '@/models/User'

const CONSTANTS = Object.freeze({
    USER_ROLE,
    Gender
})

export default {
    name: 'Test',
    data() {
        return {
            CONSTANTS,
            users: null,
            formData: {
                gender: Gender.MALE
            },
            appTheme: this.theme
        }
    },
    computed: {
        ...mapGetters(['theme'])
    },
    methods: {
        handleToggleTheme() {
            this.$store.dispatch('app/setTheme', this.appTheme)
        }
    },
    created() {
        getUsersApi().then((res) => {
            this.users = User.from(res)
            console.log('users:', this.users)
        })
    }
}
</script>
