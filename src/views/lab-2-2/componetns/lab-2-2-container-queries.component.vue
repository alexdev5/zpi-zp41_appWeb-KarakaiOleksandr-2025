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
.container-queries-wrapper {
    container: block-wrapper / inline-size;

    .container-queries {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }
}

.queries-wrapper {
    .block-item {
        width: 250px;
        height: 250px;
    }
}

@supports (container-type: inline-size) {
    @container block-wrapper (max-width: 1000px) {
        .queries-wrapper {
            .block-item {
                width: calc(50% - 16px);
                height: 150px;
            }
        }
    }

    @container block-wrapper (max-width: 40rem) {
    }

    @container block-wrapper (max-width: 26rem) {
    }
}
</style>
