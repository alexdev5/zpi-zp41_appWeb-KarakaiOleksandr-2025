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
import { NavigationIdLab2 } from '@/views/lab-1-2/type.ts'

const emit = defineEmits(['selected'])

const records = [
    {
        id: NavigationIdLab2.IndependentWork2Fonts,
        label: 'Шрифт. Google Fonts',
    },
    {
        id: NavigationIdLab2.IndependentWork2CssTables,
        label: 'CSS: Таблиці. Фон. Списки',
    },
]
</script>

<style lang="scss"></style>
