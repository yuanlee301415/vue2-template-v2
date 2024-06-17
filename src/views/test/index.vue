<template>
    <div>
        <h2>Test</h2>
    </div>
</template>

<script>
import { getUsersApi } from '@/api/user'
import { GenderEnum } from '@/enums/Gender'

export default {
    name: 'Test',
    created() {
        getUsersApi().then((res) => {
            console.log('users:', res)
        })

        // Gender
        for (const item of GenderEnum) {
            console.log(item)
        }
    }
}
</script>
