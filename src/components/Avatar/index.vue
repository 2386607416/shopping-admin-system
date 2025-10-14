<script setup>
import { computed } from "vue";

defineOptions({
    name: "Avatar",
});

const props = defineProps({
    src: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        default: "50px",
    },
    circle: {
        type: Boolean,
        default: false,
    },
    roundRect: {
        type: Boolean,
        default: false,
    },
    roundRadius: {
        type: [String, Number],
        default: 5,
    },
    alt: {
        type: String,
        default: "头像",
    },
    fit: {
        type: String,
        default: "cover",
        validator(value) {
            const fits = ["cover", "contain", "fill", "none", "scale-down"];

            return fits.includes(value);
        },
    },
});

/**
 * 图片事件
 */
const emits = defineEmits(["load", "error"]);

// 图片加载成功
function handleLoad(event) {
    // emits.load(event);
    emits("load", event);
}
// 图片加载失败
function handleError(event) {
    emits("error", event);
}

/**
 * 样式
 */
const borderRadius = computed(() => {
    if (props.circle) {
        return "50%";
    } else if (props.roundRect) {
        return `${props.roundRadius}px`;
    } else {
        return "0px";
    }
});

const style = computed(() => {
    return {
        width: props.size,
        height: props.size,
        "border-radius": borderRadius.value,
        "object-fit": props.fit,
        "object-position": "center",
    };
});
</script>

<template>
    <img
        class="avatar-container"
        v-bind:src="src"
        v-bind:alt="alt"
        v-on:load="handleLoad"
        v-on:error="handleError"
        v-bind:style="style"
    />
</template>
