<template>
    <div>Home</div>
</template>

<script>
import { getUsersApi } from '@/api/user'

export default {
    name: 'Test',
    created() {
        getUsersApi().then((res) => {
            console.log('users:', res)
        })
    }
}
</script>
