<template>
    <div>
        <h2>Test</h2>
    </div>
</template>

<script>
import { getUsersApi } from '@/api/user'
import { GenderEnum } from '@/constants'

export default {
    name: 'Test',
    created() {
        getUsersApi().then((res) => {
            console.log('users:', res)
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
