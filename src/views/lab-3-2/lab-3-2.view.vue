<template>
    <AppPageContent
        :records="records"
        :navigation-item-active="navigationItemActive"
        @navigation-selected="navigationItemActive = $event"
    >
        <Lab32Target v-if="navigationItemActive === NavigationIdLab32.Target" />
        <Lab32Task1 v-if="navigationItemActive === NavigationIdLab32.Task1" />
        <Lab32Task2 v-if="navigationItemActive === NavigationIdLab32.Task2" />
        <Lab32Task3 v-if="navigationItemActive === NavigationIdLab32.Task3" />
    </AppPageContent>
</template>

<script lang="ts" setup>
import AppPageContent from '@/components/layout/app-page-content/app-page-content.component.vue'
import Lab32Target from './components/lab-3-2-target.component.vue'
import Lab32Task1 from './components/lab-3-2-task1.component.vue'
import Lab32Task2 from './components/lab-3-2-task2.component.vue'
import Lab32Task3 from './components/lab-3-2-task3.component.vue'

import { ref } from 'vue'
import type { AsideNavigationRecord } from '@/components/layout/types.ts'
import { NavigationIdLab32 } from '@/views/lab-3-2/type.ts'

const navigationItemActive = ref(NavigationIdLab32.Target)
const records: AsideNavigationRecord[] = [
    {
        id: NavigationIdLab32.Target,
        label: 'Тема, мета, мізце розташування',
    },
    {
        id: NavigationIdLab32.Task1,
        label: 'ЗАВДАННЯ №1',
    },
    {
        id: NavigationIdLab32.Task2,
        label: 'ЗАВДАННЯ №2',
    },
    {
        id: NavigationIdLab32.Task3,
        label: 'ЗАВДАННЯ №3',
    },
]
</script>

<style lang="scss">
@use '../lab-3-1/lab-3-1.style' as *;
</style>
