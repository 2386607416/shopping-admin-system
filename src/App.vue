<script setup>
import { reactive, ref } from "vue";
import { formatDatetime } from "./utils";
import Avatar from "./components/Avatar/index.vue";

defineOptions({
    name: "App",
});

const datetime = formatDatetime(
    Date.now(),
    function (datetimeInfo) {
        return `${datetimeInfo.year}年${datetimeInfo.month}月${datetimeInfo.day}日 ${datetimeInfo.week}`;
    },
    true
);

/**
 * 搜索
 */
const search = ref("");

function handleSubmitSearch(event) {}

/**
 * 头像
 */
const avatarSrc =
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";

function handleLoad(event) {}

/**
 * 菜单
 */
const menus = reactive([
    {
        name: "home",
        icon: "icon-shangdian",
        title: "首页",
        showTitle: false,
    },
    {
        name: "statement",
        icon: "icon-shuju",
        title: "账单",
        showTitle: false,
    },
    {
        name: "setting",
        icon: "icon-shezhi",
        title: "设置",
        showTitle: false,
    },
]);

function handleMouseEnter(index) {
    menus[index].showTitle = true;
}

function handleMouseLeave(index) {
    menus[index].showTitle = false;
}
</script>

<template>
    <div class="header-layout flex-column">
        <header class="header flex-row">
            <h1 class="logo">
                <a class="home-link flex-column" href="/">
                    <img
                        class="image"
                        src="./assets/images/logo.png"
                        alt="标志"
                    />
                    <span class="text">
                        E&nbsp;&nbsp;S&nbsp;&nbsp;H&nbsp;&nbsp;O&nbsp;&nbsp;P
                    </span>
                </a>
            </h1>
            <div class="right-container flex-row shadow">
                <div class="banner flex-column">
                    <h2 class="title">Dashboard</h2>
                    <time class="time" v-bind:datetime="datetime">
                        {{ datetime }}
                    </time>
                </div>
                <form class="form" v-on:submit.prevent="handleSubmitSearch">
                    <label class="label" for="search">
                        <input
                            id="search"
                            class="input"
                            type="text"
                            placeholder="请输入需要搜索的内容..."
                            v-model.lazy="search"
                        />
                    </label>
                    <button class="button" type="submit">
                        <img src="./assets/images/search.svg" alt="搜索" />
                    </button>
                </form>
                <div class="user-info flex-row">
                    <span class="iconfont icon-xinxi message"></span>
                    <Avatar
                        size="3.8125rem"
                        v-bind:circle="true"
                        v-on:load="handleLoad"
                        v-bind:src="avatarSrc"
                    />
                </div>
            </div>
        </header>
        <div class="main-layout flex-row">
            <aside class="aside">
                <menu class="menu flex-column">
                    <li
                        class="item"
                        v-for="(
                            { name, icon, title, showTitle }, index
                        ) of menus"
                        v-bind:key="index"
                        v-on:mouseenter="handleMouseEnter(index)"
                        v-on:mouseleave="handleMouseLeave(index)"
                    >
                        <RouterLink class="link" v-bind:to="{ name }">
                            <span
                                class="iconfont icon"
                                v-bind:class="icon"
                            ></span>
                        </RouterLink>
                        <small v-show="showTitle" class="tip-title">
                            {{ title }}
                        </small>
                    </li>
                </menu>
            </aside>
            <main class="main">
                <RouterView></RouterView>
            </main>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import url("@/assets/styles/variable.css");

.header-layout {
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    gap: 3.125rem;
    box-sizing: border-box;

    .header {
        width: 100%;
        height: 11.5rem;
        flex-shrink: 0;
        justify-content: space-between;
        box-sizing: border-box;
        gap: 7.3215rem;

        .logo {
            font-weight: normal;
            margin: 0rem 2.7875rem;

            .home-link {
                align-items: flex-start;
                gap: 1.125rem;

                .image {
                    display: block;
                    width: 5rem;
                    height: 3rem;
                    object-fit: contain;
                    object-position: center;
                }

                .text {
                    font-size: 0.9375rem;
                    line-height: 0.9375rem;
                    font-weight: bolder;
                }
            }
        }

        .right-container {
            justify-content: space-between;
            width: 100%;
            height: 100%;
            padding-left: 2.5625rem;
            padding-right: 5.1875rem;
            background-color: var(--color-white);
            border-radius: 0 0 1.9375rem 1.9375rem;

            .banner {
                align-items: flex-start;
                gap: 0.875rem;

                .title {
                    font-size: 1.6875rem;
                    line-height: 1.6875rem;
                }

                .time {
                    color: var(--color-text);
                    font-size: 0.9375rem;
                    line-height: 0.9375rem;
                }
            }

            .form {
                position: relative;

                .label {
                    display: block;
                    width: 39.3125rem;
                    height: 3.5625rem;
                    box-sizing: border-box;
                    border-radius: 0.625rem;
                    background-color: var(--color-text-light-4);

                    .input {
                        width: 100%;
                        height: 100%;
                        font-size: 0.875rem;
                        padding-left: 1.5625rem;
                        box-sizing: border-box;
                        border-radius: 0.625rem;
                        background-color: var(--color-text-light-4);
                        border: none;

                        &::placeholder {
                            color: var(--color-text-light-1);
                            font-size: 0.875rem;
                        }

                        &:focus {
                            outline: none;
                        }
                    }
                }

                .button {
                    position: absolute;
                    top: 50%;
                    right: 0rem;
                    transform: translateY(-50%);
                    width: 2.795rem;
                    height: 2.648125rem;
                    margin-right: 0.625rem;
                    box-sizing: border-box;
                    background-color: var(--color-primary);
                    border: none;
                    border-radius: 0.625rem;
                    cursor: pointer;
                }
            }

            .user-info {
                gap: 3.625rem;

                .message {
                    display: flex;
                    align-items: center;
                    font-size: 2.125rem;
                }
            }
        }
    }

    .main-layout {
        width: 100%;
        height: 100%;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: auto;
        justify-content: flex-start;
        padding-right: 7.3125rem;
        box-sizing: border-box;
        gap: 7.3125rem;

        .aside {
            width: 11.0625rem;
            height: 100%;
            flex-shrink: 0;
            padding: 2.6875rem 0;
            border-radius: 0 1.9375rem 1.9375rem 0;
            background-color: var(--color-white);
            box-sizing: border-box;

            .menu {
                justify-content: flex-start;
                width: 100%;
                height: 100%;
                list-style: none;
                background-color: var(--color-white);
                gap: 2.5625rem;

                .item {
                    position: relative;
                    width: 100%;
                    height: 4.036875rem;
                    text-align: center;

                    .link {
                        display: block;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        color: var(--color-primary-light-1);
                        font-weight: bolder;
                        box-sizing: border-box;

                        .icon {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translateY(-50%) translateX(-50%);
                            font-size: 1.875rem;
                        }
                    }

                    .tip-title {
                        position: absolute;
                        right: -4rem;
                        top: 50%;
                        transform: translateY(-50%);
                        display: block;
                        color: var(--color-white);
                        background-color: var(--color-black);
                        padding: 0.5rem;
                        border-radius: 0.5rem;
                        text-align: center;

                        &::before {
                            content: "";
                            position: absolute;
                            left: -0.4rem;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 0rem;
                            height: 0rem;
                            border-top: transparent solid 0.5rem;
                            border-right: var(--color-black) solid 0.5rem;
                            border-bottom: transparent solid 0.5rem;
                            z-index: -1;
                        }
                    }

                    .router-link-active {
                        color: var(--color-primary);
                        background-color: var(--color-primary-light-3);

                        &::after {
                            content: "";
                            position: absolute;
                            right: 0rem;
                            top: 0rem;
                            width: 0.3125rem;
                            height: 100%;
                            border-radius: 0.3125rem;
                            background-color: var(--color-primary);
                        }
                    }

                    &:last-child {
                        margin-top: auto;
                    }
                }
            }
        }

        .main {
            width: 100%;
            height: 100%;
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: auto;
            box-sizing: border-box;
        }
    }
}
</style>
