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
import { NavigationIdLab1 } from '@/views/lab-1-1/type.ts'

const emit = defineEmits(['selected'])

const records = [
    {
        id: NavigationIdLab1.HtmlTable,
        label: 'Таблиці',
    },
    {
        id: NavigationIdLab1.HtmlForm,
        label: 'Форми',
    },
    {
        id: NavigationIdLab1.HtmlImage,
        label: 'Зображення',
    },
    {
        id: NavigationIdLab1.HtmlHeader,
        label: 'Заголовки',
    },
    {
        id: NavigationIdLab1.HtmlLists,
        label: 'Списки',
    },
]
</script>

<style lang="scss"></style>
