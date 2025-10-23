<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="order-chart-container order-chart flex-column">
        <h2 class="title">
            {{ title }}
            <span class="details"></span>
        </h2>
        <h3 class="sub-title">
            {{ subTitle }}
        </h3>
        <div class="chart"></div>
    </div>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
