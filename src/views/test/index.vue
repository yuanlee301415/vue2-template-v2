<template>
    <div>
        <h2>Test</h2>
    </div>
</template>

<script>
import { getUsersApi } from '@/api/user'
import { GenderEnum } from '@/constants'
import { User } from '@/models/User'

export default {
    name: 'Test',
    data() {
        return {
            user: null
        }
    },
    created() {
        getUsersApi().then((res) => {
            console.log('users:', User.from(res))
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
