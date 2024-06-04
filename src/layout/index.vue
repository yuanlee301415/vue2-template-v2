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
        },
        title() {
            console.log('$route:', this.$route)
            return this.$route.meta.title
        }
    }
}
</script>

<style scoped>
.side {
    position: fixed;
    width: 300px;
    height: 100vh;
}
.content {
    padding: 20px 20px 20px 320px;
}
</style>
