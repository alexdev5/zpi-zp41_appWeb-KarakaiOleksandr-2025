<template>
    <AppPageContent
        :records="records"
        :navigation-item-active="navigationItemActive"
        @navigation-selected="navigationItemActive = $event"
    >
        <Lab5Target v-if="navigationItemActive === NavigationIdLab5.Target" />
        <Lab5Task1 v-if="navigationItemActive === NavigationIdLab5.Task1" />
        <Lab5Task2 v-if="navigationItemActive === NavigationIdLab5.Task2" />
    </AppPageContent>
</template>

<script lang="ts" setup>
import AppPageContent from '@/components/layout/app-page-content/app-page-content.component.vue'
import Lab5Target from './components/lab-5-target.component.vue'
import Lab5Task1 from './components/lab-5-task1.component.vue'
import Lab5Task2 from './components/lab-5-task2.component.vue'

import { ref } from 'vue'
import type { AsideNavigationRecord } from '@/components/layout/types.ts'
import { NavigationIdLab5 } from '@/views/lab-5/type.ts'

const navigationItemActive = ref(NavigationIdLab5.Target)
const records: AsideNavigationRecord[] = [
    {
        id: NavigationIdLab5.Target,
        label: 'Тема, мета, мізце розташування',
    },
    {
        id: NavigationIdLab5.Task1,
        label: 'ЗАВДАННЯ №1',
    },
    {
        id: NavigationIdLab5.Task2,
        label: 'ЗАВДАННЯ №2',
    },
]
</script>

<style lang="scss">
@use '../lab-3-1/lab-3-1.style' as *;
</style>
