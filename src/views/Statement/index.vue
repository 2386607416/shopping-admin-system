<script setup>
import { reactive } from "vue";
import OrderBoard from "./OrderBoard/index.vue";
import OrderList from "./OrderList/index.vue";
import OrderChart from "./OrderChart/index.vue";
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

/**
 * 销售列表
 */
const sellerData = [
    {
        avatarSrc:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        name: "Striped Shirt Dress",
        sold: 250,
        sales: `￥${formatMoney(2125)}`,
    },
    {
        avatarSrc:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        name: "Detachable Gilet Clothing",
        sold: 190,
        sales: `￥${formatMoney(1902)}`,
    },
    {
        avatarSrc:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        name: "Effect Brifcase Jean",
        sold: 180,
        sales: `￥${formatMoney(1025)}`,
    },
    {
        avatarSrc:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        name: "Furry Hooded Skirts",
        sold: 150,
        sales: `￥${formatMoney(1235)}`,
    },
];

/**
 * 销售额图表
 */
const charts = [
    {
        title: "访客流量",
        subTitle: "线上和线下",
    },
    {
        title: "品类销售额",
        subTitle: "本月总额",
    },
];
</script>

<template>
    <div class="statement-container statement flex-column">
        <div class="order-board-list flex-row">
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
                <div class="order-chart shadow"></div>
            </div>
            <div class="right-container shadow">
                <OrderChart
                    v-bind:title="charts[0].title"
                    v-bind:subTitle="charts[0].subTitle"
                />
            </div>
            <div class="right-container shadow">
                <OrderChart
                    v-bind:title="charts[0].title"
                    v-bind:subTitle="charts[0].subTitle"
                />
            </div>
        </div>
        <div class="order-sales-list flex-row">
            <div class="sales-list">
                <OrderList v-bind:sellerData="sellerData" />
            </div>
            <div class="total-chart shadow">
                <OrderChart
                    v-bind:title="charts[1].title"
                    v-bind:subTitle="charts[1].subTitle"
                />
            </div>
            <div class="total-chart shadow">
                <OrderChart
                    v-bind:title="charts[1].title"
                    v-bind:subTitle="charts[1].subTitle"
                />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
