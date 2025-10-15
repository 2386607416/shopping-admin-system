<script setup>
import { reactive } from "vue";
import OrderBoard from "./OrderBoard/index.vue";
import { formatDatetime, formatMoney } from "@/utils";

defineOptions({
    name: "Statement",
});

/**
 * 订单
 */
const orders = reactive([
    {
        title: "订单交易量",
        subTitle: formatDatetime(Date.now(), "YYYY年MM月", true),
        icon: "order",
        count: 2501,
        countType: "up",
        percent: 10,
        shadow: false,
    },
    {
        title: "订单运送量",
        subTitle: formatDatetime(Date.now(), "YYYY年MM月", true),
        icon: "deliver",
        iconSize: {
            width: "3.6875rem",
            height: "2.4375rem",
        },
        count: 502,
        countType: "down",
        percent: 5,
        shadow: false,
    },
    {
        title: "总销售额",
        titleColor: "rgb(255,255,255)",
        subTitle: formatDatetime(Date.now(), "MM月", true),
        subTitleColor: "rgb(255, 255, 255)",
        icon: "total",
        iconSize: {
            width: "2.4375rem",
            height: "2.4375rem",
        },
        count: `￥${formatMoney(15630)}`,
        countType: "down",
        percent: 10,
        topBackgroundColor: "rgb(104, 133, 255)",
        bottomBackgroundColor: "rgb(255, 255, 255)",
        shadow: false,
    },
]);

function handleMouseEnter(index) {
    orders[index].shadow = true;
}

function handleMouseLeave(index) {
    orders[index].shadow = false;
}
</script>

<template>
    <div class="statement-container statement flex-column">
        <div class="order-board flex-row">
            <div class="left-container flex-column">
                <ul class="order flex-row">
                    <li
                        class="item"
                        v-for="(
                            {
                                title,
                                subTitle,
                                icon,
                                iconSize,
                                count,
                                countType,
                                percent,
                                titleColor,
                                subTitleColor,
                                topBackgroundColor,
                                bottomBackgroundColor,
                                shadow,
                            },
                            index
                        ) of orders"
                        v-bind:key="index"
                        v-bind:class="{
                            shadow,
                        }"
                        v-on:mouseenter="handleMouseEnter(index)"
                        v-on:mouseleave="handleMouseLeave(index)"
                    >
                        <OrderBoard
                            class="flex-column"
                            v-bind:title="title"
                            v-bind:subTitle="subTitle"
                            v-bind:icon="icon"
                            v-bind:iconSize="iconSize"
                            v-bind:count="count"
                            v-bind:countType="countType"
                            v-bind:percent="percent"
                            v-bind:titleColor="titleColor"
                            v-bind:subTitleColor="subTitleColor"
                            v-bind:topBackgroundColor="topBackgroundColor"
                            v-bind:bottomBackgroundColor="bottomBackgroundColor"
                        />
                    </li>
                </ul>
                <div class="order-chart"></div>
            </div>
            <div class="right-container"></div>
        </div>
        <div class="order-list"></div>
    </div>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
