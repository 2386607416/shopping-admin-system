<script setup>
import { formatDatetime } from "./utils";

const datetime = formatDatetime(
    Date.now(),
    function (datetimeInfo) {
        return `${datetimeInfo.year}年${datetimeInfo.month}月${datetimeInfo.day}日 ${datetimeInfo.week}`;
    },
    true
);
</script>

<template>
    <div class="layout-container">
        <header class="header">
            <h1 class="logo">
                <a class="home-link" href="/">
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
            <div class="right-container">
                <div class="banner">
                    <h2 class="title">Dashboard</h2>
                    <time class="time" v-bind:datetime="datetime">
                        {{ datetime }}
                    </time>
                </div>
            </div>
        </header>
    </div>
</template>

<style lang="less" scoped>
@import url("@/assets/styles/variable.css");

.layout-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    .header {
        display: flex;
        width: 100%;
        height: 11.5rem;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;

        .logo {
            font-weight: normal;

            .home-link {
                display: flex;
                flex-direction: column;
                justify-content: center;
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
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .banner {
                display: flex;
                flex-direction: column;
                justify-content: center;
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
        }
    }
}
</style>
