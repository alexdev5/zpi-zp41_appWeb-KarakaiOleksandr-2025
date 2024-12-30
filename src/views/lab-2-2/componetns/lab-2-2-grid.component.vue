<template>
    <section class="grid gap-8 text-content-wrapper">
        <h3>Responsive layout з використанням CSS Grid layout</h3>
        <div class="container-grid-wrapper">
            <div
                class="block-item"
                v-for="block in blocks"
                :style="{ background: block.background }"
            >
                <span>{{ block.label }}</span>
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
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;

        span {
            display: flex;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #fff;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
