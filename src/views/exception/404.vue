<template>
    <div class="page_404 full flx-center">
        <h2>页面不见了</h2>
        <div><a @click="$router.go(-1)">返回上一页</a> <a @click="$router.push(HOME_URL)">首页</a></div>
    </div>
</template>

<script>
import { HOME_URL } from '@/config'

export default {
    name: 'Exception-404',
    data() {
        return {
            HOME_URL
        }
    }
}
</script>

<style scoped lang="less">
.page_404 {
    flex-direction: column;
    a {
        cursor: pointer;
        color: var(--color-primary);
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
