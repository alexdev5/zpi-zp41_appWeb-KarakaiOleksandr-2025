<template>
    <AppPageContent
        :records="records"
        :navigation-item-active="navigationItemActive"
        @navigation-selected="navigationItemActive = $event"
    >
        <Lab6Target v-if="navigationItemActive === NavigationIdLab6.Target" />
        <Lab6Task1 v-if="navigationItemActive === NavigationIdLab6.Task1" />
        <Lab6Task2 v-if="navigationItemActive === NavigationIdLab6.Task2" />
    </AppPageContent>
</template>

<script lang="ts" setup>
import AppPageContent from '@/components/layout/app-page-content/app-page-content.component.vue'
import Lab6Target from './components/lab-6-target.component.vue'
import Lab6Task1 from './components/lab-6-task1.component.vue'
import Lab6Task2 from './components/lab-6-task2.component.vue'

import { ref } from 'vue'
import type { AsideNavigationRecord } from '@/components/layout/types.ts'
import { NavigationIdLab6 } from '@/views/lab-6/type.ts'

const navigationItemActive = ref(NavigationIdLab6.Target)
const records: AsideNavigationRecord[] = [
    {
        id: NavigationIdLab6.Target,
        label: 'Тема, мета, мізце розташування',
    },
    {
        id: NavigationIdLab6.Task1,
        label: 'ЗАВДАННЯ №1',
    },
    {
        id: NavigationIdLab6.Task2,
        label: 'ЗАВДАННЯ №2',
    },
]
</script>

<style lang="scss">
@use '../lab-3-1/lab-3-1.style' as *;
</style>
