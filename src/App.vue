<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        window.__APP_VERSION__ = process.env.VUE_APP_VERSION
        window.__APP_BUILD_DATE__ = process.env.VUE_APP_BUILD_DATE

        const leftStyle = 'background-color:#2f353a;color:#fff;padding:0 5px;line-height:1.2rem;border-radius:0.2rem 0 0 0.2rem;'
        const rightStyle = 'background-color:#17a2b8;color:#fff;padding:0 5px;line-height:1.2rem;border-radius:0 0.2rem 0.2rem 0;'
        console.log(`%c NODE_ENV %c ${process.env.NODE_ENV}`, leftStyle, rightStyle)
        console.log(`%c VERSION %c ${window.__APP_VERSION__}`, leftStyle, rightStyle)
        console.log(`%c BUILD_DATE %c ${window.__APP_BUILD_DATE__}`, leftStyle, rightStyle)
    }
}
</script>
