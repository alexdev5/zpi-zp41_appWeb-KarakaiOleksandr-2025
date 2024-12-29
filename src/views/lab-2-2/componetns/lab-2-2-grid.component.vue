<template>
    <section class="grid gap-8 text-content-wrapper">
        <h3>Респонсивна верстка з використанням CSS Grid</h3>
        <div class="container-grid-wrapper">
            <div
                class="block-item"
                v-for="block in blocks"
                :style="{ background: block.background }"
            >
                {{ block.label }}
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const blocks = [
    {
        label: 1,
        background: '#3566f8',
    },
    {
        label: 3,
        background: '#fecd3e',
    },
    {
        label: 2,
        background: '#fc5554',
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
    {
        label: 7,
        background: '#3566f8',
    },
    {
        label: 8,
        background: '#fc5554',
    },
    {
        label: 9,
        background: '#fecd3e',
    },
    {
        label: 10,
        background: '#3566f8',
    },
    {
        label: 11,
        background: '#fecd3e',
    },
    {
        label: 12,
        background: '#fc5554',
    },
]
</script>

<style lang="scss">
.container-grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;

    .block-item {
        height: 250px;
    }
}
</style>
