<script setup>
import { computed, reactive } from "vue";
import OrderBoard from "./OrderBoard/index.vue";
import OrderList from "./OrderList/index.vue";
import OrderChart from "./OrderChart/index.vue";
import { formatDatetime, formatMoney } from "@/utils";

defineOptions({
    name: "Statement",
});

/**
 * 得到当前的字体大小
 */
const rootFontSize = computed(() => {
    return window
        .getComputedStyle(document.documentElement)
        .fontSize.replace("px", "");
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
        options: {
            title: {
                text: `${orders[1].count}`,
                textStyle: {
                    color: "rgb(104, 133, 255)",
                    fontSize: rootFontSize.value * 3,
                },
                subtext: "总销量",
                subtextStyle: {
                    color: "rgb(188, 194, 210)",
                    fontSize: rootFontSize.value * 1.2,
                },
                padding: 0,
                itemGap: 0,
                textVerticalAlign: "auto",
                left: "center",
                top: "center",
            },
            legend: {
                bottom: rootFontSize.value,
                selectedMode: false,
                itemWidth: rootFontSize.value * 3,
                itemHeight: rootFontSize.value * 1.5,
                textStyle: {
                    width: rootFontSize.value * 5,
                    height: rootFontSize.value * 1.5,
                    fontWeight: "bolder",
                    overflow: "truncate",
                    ellipsis: "...",
                },
                itemGap: rootFontSize.value * 10,
                data: [
                    {
                        name: "线上",
                        icon: `path://M11.999,
                        0.0 L36.999,
                        0.0 C43.627,
                        0.0 48.999,
                        5.372 48.999,
                        11.999 C48.999,18.627 43.627,
                        23.999 36.999,
                        23.999 L11.999,
                        23.999 C5.372,
                        23.999 0.0,
                        18.627 0.0,
                        11.999 C0.0,
                        5.372 5.372,
                        0.0 11.999,
                        0.0 Z`,
                    },
                    {
                        name: "线下",
                        icon: `path://M11.999,
                        0.0 L36.999,
                        0.0 C43.627,
                        0.0 48.999,
                        5.372 48.999,
                        11.999 C48.999,
                        18.627 43.627,
                        23.999 36.999,
                        23.999 L11.999,
                        23.999 C5.372,
                        23.999 0.0,
                        18.627 0.0,
                        11.999 C0.0,
                        5.372 5.372,
                        0.0 11.999,
                        0.0 Z`,
                    },
                ],
            },
            tooltip: {
                show: false,
            },
            series: [
                {
                    type: "pie",
                    emphasis: {
                        disabled: true,
                        scale: false,
                    },
                    radius: ["80%"],
                    label: {
                        show: false,
                    },
                    data: [
                        {
                            value: 1,
                            itemStyle: {
                                color: "rgb(241, 244, 252)",
                            },
                        },
                    ],
                },
                {
                    type: "pie",
                    emphasis: {
                        disabled: true,
                        scale: false,
                    },
                    radius: ["55%", "65%"],
                    label: {
                        show: false,
                    },
                    data: [
                        {
                            name: "线上",
                            value: 1,
                            itemStyle: {
                                color: "rgb(241, 103, 168)",
                            },
                        },
                    ],
                },
                {
                    type: "pie",
                    name: "total-sales",
                    emphasis: {
                        disabled: true,
                        scale: false,
                    },
                    radius: ["55%", "65%"],
                    label: {
                        show: false,
                    },
                    data: [
                        {
                            name: "线上",
                            value: 80,
                            itemStyle: {
                                color: "transparent",
                            },
                        },
                        {
                            name: "线下",
                            value: 400,
                            itemStyle: {
                                color: "rgb(104, 133, 255)",
                                borderRadius: "50%",
                            },
                        },
                    ],
                },
                {
                    type: "pie",
                    emphasis: {
                        disabled: true,
                        scale: false,
                    },
                    radius: ["40%"],
                    label: {
                        show: false,
                    },
                    data: [
                        {
                            value: 1,
                            itemStyle: {
                                color: "rgb(255, 255, 255)",
                            },
                        },
                    ],
                },
            ],
        },
    },
    {
        title: "品类销售额",
        subTitle: "本月总额",
        options: {
            title: {
                text: `${orders[2].count}`,
                textStyle: {
                    color: "rgb(104, 133, 255)",
                    fontSize: rootFontSize.value * 1.8,
                },
                subtext: "总销售额",
                subtextStyle: {
                    color: "rgb(188, 194, 210)",
                    fontSize: rootFontSize.value * 0.9,
                },
                padding: 0,
                itemGap: 5,
                textVerticalAlign: "auto",
                left: "center",
                top: "center",
            },
            legend: {
                show: false,
            },
            tooltip: {
                show: false,
            },
            series: [
                {
                    type: "pie",
                    name: "total-sales",
                    emphasis: {
                        disabled: true,
                        scale: false,
                    },
                    radius: ["75%", "85%"],
                    label: {
                        show: true,
                        position: "outer",
                        formatter: "{content|{d}%}\n{name|{b}}",
                        alignTo: "labelLine",
                        bleedMargin: 5,
                        rich: {
                            content: {
                                fontSize: rootFontSize.value,
                            },
                            name: {
                                fontSize: rootFontSize.value,
                                fontWeight: "bolder",
                            },
                        },
                    },
                    labelLine: {
                        length: 20,
                        length2: 20,
                        maxSurfaceAngle: 80,
                    },
                    itemStyle: {
                        borderRadius: "50%",
                    },
                    padAngle: 4,
                    data: [
                        {
                            name: "饰品",
                            value: 4376,
                            itemStyle: {
                                color: "rgb(243, 146, 0)",
                            },
                            label: {
                                rich: {
                                    content: {
                                        color: "rgb(243, 146, 0)",
                                    },
                                },
                            },
                        },
                        {
                            name: "鞋类",
                            value: 1875,
                            itemStyle: {
                                color: "rgb(102, 122, 205)",
                            },
                            label: {
                                rich: {
                                    content: {
                                        color: "rgb(102, 122, 205)",
                                    },
                                },
                            },
                        },
                        {
                            name: "服饰",
                            value: 9378,
                            itemStyle: {
                                color: "rgb(241, 103, 168)",
                            },
                            label: {
                                rich: {
                                    content: {
                                        color: "rgb(241, 103, 168)",
                                    },
                                },
                            },
                        },
                    ],
                },
                {
                    type: "pie",
                    emphasis: {
                        disabled: true,
                        scale: false,
                    },
                    radius: ["65%"],
                    label: {
                        show: false,
                    },
                    data: [
                        {
                            value: 1,
                            itemStyle: {
                                color: "rgb(247, 247, 249)",
                            },
                        },
                    ],
                },
                {
                    type: "pie",
                    emphasis: {
                        disabled: true,
                        scale: false,
                    },
                    radius: ["60%"],
                    label: {
                        show: false,
                    },
                    data: [
                        {
                            value: 1,
                            itemStyle: {
                                color: "rgb(255, 255, 255)",
                            },
                        },
                    ],
                },
            ],
        },
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
                    v-bind:options="charts[0].options"
                />
            </div>
            <div class="right-container shadow">
                <OrderChart
                    v-bind:title="charts[0].title"
                    v-bind:subTitle="charts[0].subTitle"
                    v-bind:options="charts[0].options"
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
                    v-bind:options="charts[1].options"
                />
            </div>
            <div class="total-chart shadow">
                <OrderChart
                    v-bind:title="charts[1].title"
                    v-bind:subTitle="charts[1].subTitle"
                    v-bind:options="charts[1].options"
                />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
