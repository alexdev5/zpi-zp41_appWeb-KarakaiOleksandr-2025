<template>
    <AppPageContent
        :records="records"
        :navigation-item-active="navigationItemActive"
        @navigation-selected="navigationItemActive = $event"
    >
        <Lab31Target v-if="navigationItemActive === NavigationIdLab31.Target" />
        <Lab31Task1 v-if="navigationItemActive === NavigationIdLab31.Task1" />
        <Lab31Task2 v-if="navigationItemActive === NavigationIdLab31.Task2" />
        <Lab31Task3 v-if="navigationItemActive === NavigationIdLab31.Task3" />
        <Lab31Task4 v-if="navigationItemActive === NavigationIdLab31.Task4" />
        <Lab31Task5 v-if="navigationItemActive === NavigationIdLab31.Task5" />
    </AppPageContent>
</template>

<script lang="ts" setup>
import type { AsideNavigationRecord } from '@/components/layout/types.ts'
import { ref } from 'vue'
import AppPageContent from '@/components/layout/app-page-content/app-page-content.component.vue'
import { NavigationIdLab31 } from '@/views/lab-3-1/type.ts'
import Lab31Target from './componetns/lab-3-1-target.component.vue'
import Lab31Task1 from './componetns/lab-3-1-task1.component.vue'
import Lab31Task2 from './componetns/lab-3-1-task2.component.vue'
import Lab31Task3 from './componetns/lab-3-1-task3.component.vue'
import Lab31Task4 from './componetns/lab-3-1-task4.component.vue'
import Lab31Task5 from './componetns/lab-3-1-task5.component.vue'

const navigationItemActive = ref(NavigationIdLab31.Target)
const records: AsideNavigationRecord[] = [
    {
        id: NavigationIdLab31.Target,
        label: 'Тема, мета, мізце розташування',
    },
    {
        id: NavigationIdLab31.Task1,
        label: 'ЗАВДАННЯ №1',
    },
    {
        id: NavigationIdLab31.Task2,
        label: 'ЗАВДАННЯ №2',
    },
    {
        id: NavigationIdLab31.Task3,
        label: 'ЗАВДАННЯ №3',
    },
    {
        id: NavigationIdLab31.Task4,
        label: 'ЗАВДАННЯ №4',
    },
    {
        id: NavigationIdLab31.Task5,
        label: 'ЗАВДАННЯ №5',
    },
]
</script>

<style lang="scss">
@use './lab-3-1.style' as *;
</style>
