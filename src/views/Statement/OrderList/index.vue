<script setup>
import Avatar from "@/components/Avatar/index.vue";

const props = defineProps({
    sellerData: {
        type: Array,
        default: () => {
            return [];
        },
    },
});
</script>

<template>
    <div class="order-list-container order-list">
        <table class="table">
            <thead class="table-header">
                <tr class="table-header-item">
                    <th class="table-header-text best-seller" scope="col">
                        畅销排行
                    </th>
                    <th class="table-header-text name" scope="col">名称</th>
                    <th class="table-header-text sold" scope="col">销量</th>
                    <th class="table-header-text sales" scope="col">销售量</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr
                    class="table-body-item"
                    v-for="(
                        { avatarSrc, name, sold, sales }, index
                    ) of sellerData"
                    v-bind:key="index"
                >
                    <th scope="row">
                        <Avatar
                            v-bind:src="avatarSrc"
                            v-bind:circle="true"
                            size="3.3125rem"
                        />
                    </th>
                    <td>{{ name }}</td>
                    <td>{{ sold }}</td>
                    <td>{{ sales }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="less" scoped>
@import url("./index.less");
</style>
