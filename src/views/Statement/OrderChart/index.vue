<script setup>
import { onBeforeUnmount, onMounted, useTemplateRef } from "vue";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    DatasetComponent,
    TransformComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    options: {
        type: Object,
        required: true,
    },
});

/**
 * 初始化图表
 */
echarts.use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    DatasetComponent,
    TransformComponent,
    PieChart,
    CanvasRenderer,
]);

const chart = useTemplateRef("chart");
let chartElement;

onMounted(() => {
    chartElement = echarts.init(chart.value);
    chartElement.setOption(props.options);
    window.addEventListener("resize", chartElement.resize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", chartElement.resize);
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
        <div class="chart" ref="chart"></div>
    </div>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
