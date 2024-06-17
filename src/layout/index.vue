<!--
主体布局
-->

<template>
    <div id="main" class="main">
        <div class="side">
            <nav-bar></nav-bar>
        </div>
        <div class="content">
            <transition name="fade-transform" mode="out-in">
                <template>
                    <router-view :key="key" />
                </template>
            </transition>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
    name: 'Layout',
    components: {
        NavBar
    },
    computed: {
        key() {
            return this.$route.fullPath
        }
    }
}
</script>

<style scoped lang="less">
@import 'style';
</style>
