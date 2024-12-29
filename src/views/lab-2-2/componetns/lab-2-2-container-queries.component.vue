<template>
    <div class="container-queries-wrapper queries-wrapper">
        <div class="container-queries">
            <div
                class="block-item"
                v-for="block in blocks"
                :style="{ background: block.background }"
            >
                {{ block.label }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const blocks = [
    {
        label: 1,
        background: '#3566f8',
    },
    {
        label: 2,
        background: '#fc5554',
    },
    {
        label: 3,
        background: '#fecd3e',
    },
    {
        label: 4,
        background: '#3566f8',
    },
    {
        label: 5,
        background: '#fecd3e',
    },
    {
        label: 6,
        background: '#fc5554',
    },
]
</script>

<style lang="scss">
.queries-wrapper {
    .block-item {
        width: 100px;
        height: 100px;
    }
}
</style>
