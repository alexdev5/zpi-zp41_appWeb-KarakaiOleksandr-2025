<template>
    <AppPageContent
        :records="records"
        :navigation-item-active="navigationItemActive"
        @navigation-selected="navigationItemActive = $event"
    >
        <Lab4Target v-if="navigationItemActive === NavigationIdLab4.Target" />
        <Lab4Task2 v-if="navigationItemActive === NavigationIdLab4.Task2" />
        <Lab4Task4 v-if="navigationItemActive === NavigationIdLab4.Task4" />
        <Lab4Task6 v-if="navigationItemActive === NavigationIdLab4.Task6" />
        <Lab4Task7 v-if="navigationItemActive === NavigationIdLab4.Task7" />
    </AppPageContent>
</template>

<script lang="ts" setup>
import AppPageContent from '@/components/layout/app-page-content/app-page-content.component.vue'
import Lab4Target from './components/lab-4-target.component.vue'
import Lab4Task2 from './components/lab-4-task2.component.vue'
import Lab4Task4 from './components/lab-4-task4.component.vue'
import Lab4Task6 from './components/lab-4-task6.component.vue'
import Lab4Task7 from './components/lab-4-task7.component.vue'

import { ref } from 'vue'
import type { AsideNavigationRecord } from '@/components/layout/types.ts'
import { NavigationIdLab4 } from '@/views/lab-4/type.ts'

const navigationItemActive = ref(NavigationIdLab4.Target)
const records: AsideNavigationRecord[] = [
    {
        id: NavigationIdLab4.Target,
        label: 'Тема, мета, мізце розташування',
    },
    {
        id: NavigationIdLab4.Task2,
        label: 'ЗАВДАННЯ №2',
    },
    {
        id: NavigationIdLab4.Task4,
        label: 'ЗАВДАННЯ №4',
    },
    {
        id: NavigationIdLab4.Task6,
        label: 'ЗАВДАННЯ №6',
    },
    {
        id: NavigationIdLab4.Task7,
        label: 'ЗАВДАННЯ №7',
    },
]
</script>

<style lang="scss">
@use '../lab-3-1/lab-3-1.style' as *;
</style>
