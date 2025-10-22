<script setup>
import order from "@/assets/images/order.svg";
import deliver from "@/assets/images/deliver.svg";
import total from "@/assets/images/total.svg";
import { computed } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    titleColor: {
        type: String,
        default: "rgb(104,133,255)",
    },
    subTitle: {
        type: String,
        required: true,
    },
    subTitleColor: {
        type: String,
        default: "rgb(164,172,194)",
    },
    icon: {
        type: String,
        default: "order",
        validator(value) {
            const icons = ["order", "deliver", "total"];

            return icons.includes(value);
        },
    },
    iconSize: {
        type: Object,
        default() {
            return {
                width: "2.75rem",
                height: "2.75rem",
            };
        },
    },
    count: {
        type: [Number, String],
        default: 0,
    },
    countType: {
        type: String,
        default: "up",
        validator(value) {
            return ["up", "down"].includes(value);
        },
    },
    percent: {
        type: Number,
        default: 0,
    },
    topBackgroundColor: {
        type: String,
        default: "rgb(255,255,255)",
    },
    bottomBackgroundColor: {
        type: String,
        default: "rgb(218,228,253)",
    },
});

/**
 * 图标
 */
const iconSrc = computed(() => {
    switch (props.icon) {
        case "order":
            return order;
        case "deliver":
            return deliver;
        case "total":
            return total;
        default:
            return order;
    }
});
const countIcon = computed(() => {
    switch (props.countType) {
        case "up":
            return "icon-shangzhang up";
        case "down":
            return "icon-xiadie down";
        default:
            return "icon-shangzhang up";
    }
});
</script>

<template>
    <div class="order-board-container order-board">
        <div
            class="top-container flex-row"
            v-bind:style="{ 'background-color': topBackgroundColor }"
        >
            <div class="title flex-column">
                <span class="order-title" v-bind:style="{ color: titleColor }">
                    {{ title }}
                </span>
                <span v-bind:style="{ color: subTitleColor }">
                    {{ subTitle }}
                </span>
            </div>
            <img
                class="icon"
                v-bind:src="iconSrc"
                v-bind:alt="title"
                v-bind:style="{
                    width: iconSize.width,
                    height: iconSize.height,
                }"
            />
        </div>
        <div
            class="bottom-container flex-row"
            v-bind:style="{ 'background-color': bottomBackgroundColor }"
        >
            <span class="count">{{ count }}</span>
            <span class="iconfont" v-bind:class="countIcon">
                &nbsp;{{ percent }}%
            </span>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
