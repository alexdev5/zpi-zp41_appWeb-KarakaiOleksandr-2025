<template>
    <div class="flex gap-8">
        <button
            v-for="record in records"
            class="app-btn as-text"
            @click="emit('selected', record.id)"
        >
            {{ record.label }}
        </button>
    </div>
</template>

<script lang="ts" setup>
import { NavigationIdLab21 } from '@/views/lab-2-1/type.ts'

const emit = defineEmits(['selected'])

const records = [
    {
        id: NavigationIdLab21.Task3FlexboxHtmlCode,
        label: 'HTML-код (Flexbox)',
    },
    {
        id: NavigationIdLab21.Task3FlexboxCssCode,
        label: 'CSS-код (Flexbox)',
    },
]
</script>

<style lang="scss"></style>
