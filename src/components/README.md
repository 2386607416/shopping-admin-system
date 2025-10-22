# 组件使用指南

## Avatar

### 描述

一个可自定义的头像组件，支持不同形状和图片适应模式。

### 属性

-   `src` (String, 必填): 图片的源地址。
-   `size` (String, 默认: "50px"): 头像的尺寸。
-   `circle` (Boolean, 默认: false): 是否将头像显示为圆形。
-   `roundRect` (Boolean, 默认: false): 是否将头像显示为圆角矩形。
-   `roundRadius` (String | Number, 默认: 5): 圆角的半径（如果 `roundRect` 为 true）。
-   `alt` (String, 默认: "头像"): 图片的替代文本。
-   `fit` (String, 默认: "cover"): 图片在容器中的适应方式。可选值: "cover", "contain", "fill", "none", "scale-down"。

### 事件

-   `load`: 图片加载成功时触发。
-   `error`: 图片加载失败时触发。

### 使用示例

```vue
<template>
    <Avatar
        src="https://example.com/avatar.jpg"
        size="100px"
        circle
        @load="handleLoad"
        @error="handleError"
    />
</template>

<script setup>
import Avatar from "./Avatar/index.vue";

const handleLoad = (event) => {
    console.log("图片加载成功:", event);
};

const handleError = (event) => {
    console.error("图片加载失败:", event);
};
</script>
```
