<template>
    <dl :class="{ open: open }" :style="{ textIndent: data._depth + 'em' }">
        <template v-if="data.children && data.children.length">
            <dt :title="data.title" @click="handleToggle">
                <span>{{ data.title }}</span>
                <i />
            </dt>
            <dd>
                <NavItem v-for="item of data.children" :key="item.name" :data="item" />
            </dd>
        </template>
        <template v-else>
            <dt :title="data.title">
                <router-link :to="{ name: data.name }">{{ data.title }}</router-link>
            </dt>
        </template>
    </dl>
</template>

<script>
export default {
    name: 'NavItem',
    props: {
        data: { type: Object, default: null }
    },
    data() {
        return {
            open: false
        }
    },
    created() {
        const hash = window.location.hash
        this.open = hash.startsWith('#' + this.data._fullPath)
    },
    methods: {
        handleToggle() {
            this.open = !this.open
        }
    }
}
</script>

<style scoped lang="less">
@dt-height: 40px;
dl {
    dt {
        position: relative;
        cursor: pointer;

        > a,
        > span {
            color: white;
            text-decoration: none;
            font-size: 16px;
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            height: @dt-height;
            overflow: hidden;
            line-height: @dt-height;
            padding-right: 10px;
        }

        > i {
            text-indent: 0 !important;
            box-sizing: border-box;
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 5px;
            right: 10px;
            top: 50%;
            opacity: 1;
            transition: all 0.3s;
            color: rgba(0, 0, 0, 0.85);
            transform: translateY(-50%);
            line-height: @dt-height;
            background: rgba(255, 255, 255, 0.2);

            &::before {
                background-color: #fff;
                transform: rotate(45deg) translateX(2.5px);
                position: absolute;
                left: 43.33%;
                top: 43.33%;
                width: 6px;
                height: 1.5px;
                border-radius: 2px;
                content: '';
                box-sizing: border-box;
            }

            &:after {
                background-color: #fff;
                transform: rotate(-45deg) translateX(-2.5px);
                position: absolute;
                left: 43.33%;
                top: 43.33%;
                width: 6px;
                height: 1.5px;
                content: '';
                border-radius: 2px;
                box-sizing: border-box;
            }
        }
    }

    > dd {
        display: none;
    }

    &.open {
        > i:before {
            transform: rotate(-45deg) translateX(2.5px);
        }

        > i:after {
            transform: rotate(45deg) translateX(-2.5px);
        }

        > dd {
            display: block;
        }
    }
}
</style>
