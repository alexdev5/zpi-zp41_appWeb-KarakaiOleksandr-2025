<template>
    <AppPageContent
        :records="records"
        :navigation-item-active="navigationItemActive"
        @navigation-selected="navigationItemActive = $event"
    >
        <Lab21Target v-if="navigationItemActive === NavigationIdLab21.Target" />
        <Lab21Task1 v-if="navigationItemActive === NavigationIdLab21.Task1" />
        <Lab21Task2
            v-if="navigationItemActive === NavigationIdLab21.Task2"
            @selected="navigationItemActive = $event"
        />
        <Lab21Task3
            v-if="navigationItemActive === NavigationIdLab21.Task3"
            @selected="navigationItemActive = $event"
        />
        <Lab21FluidLayout
            v-if="navigationItemActive === NavigationIdLab21.Task2FluidLayout"
        />
        <Lab21FixedLayout
            v-if="navigationItemActive === NavigationIdLab21.Task2FixedLayout"
        />
        <Lab21Task3FlexboxHtmlCode
            v-if="
                navigationItemActive === NavigationIdLab21.Task3FlexboxHtmlCode
            "
        />
        <Lab21Task3FlexboxCssCode
            v-if="
                navigationItemActive === NavigationIdLab21.Task3FlexboxCssCode
            "
        />
    </AppPageContent>
</template>

<script lang="ts" setup>
import AppPageContent from '@/components/layout/app-page-content/app-page-content.component.vue'
import Lab21Target from './componetns/lab-2-1-target.component.vue'
import Lab21Task1 from './componetns/lab-2-1-task1.component.vue'
import Lab21Task2 from './componetns/lab-2-1-task2.component.vue'
import Lab21Task3 from './componetns/lab-2-1-task3.component.vue'
import Lab21FluidLayout from './componetns/lab-2-1-task2-fluid-layout.component.vue'
import Lab21FixedLayout from './componetns/lab-2-1-task2-fixed-layout.component.vue'
import Lab21Task3FlexboxHtmlCode from './componetns/lab-2-1-task3-flexbox-html-code.component.vue'
import Lab21Task3FlexboxCssCode from './componetns/lab-2-1-task3-flexbox-css-code.component.vue'

import { ref } from 'vue'
import type { AsideNavigationRecord } from '@/components/layout/types.ts'
import { NavigationIdLab21 } from '@/views/lab-2-1/type.ts'

const navigationItemActive = ref(NavigationIdLab21.Target)

const records: AsideNavigationRecord[] = [
    {
        id: NavigationIdLab21.Target,
        label: 'Тема, мета, мізце розташування',
    },
    {
        id: NavigationIdLab21.Task1,
        label: 'Завдання 1. Зовнішній вигляд макету. Код макету.',
    },
    {
        id: NavigationIdLab21.Task2,
        label: 'Завдання 2',
        children: [
            {
                id: NavigationIdLab21.Task2FixedLayout,
                label: 'Фіксована блокова верстка',
            },
            {
                id: NavigationIdLab21.Task2FluidLayout,
                label: 'Гумова блокова верстка',
            },
        ],
    },
    {
        id: NavigationIdLab21.Task3,
        label: 'Завдання 3',
        children: [
            {
                id: NavigationIdLab21.Task3FlexboxHtmlCode,
                label: 'HTML-код Flexbox',
            },
            {
                id: NavigationIdLab21.Task3FlexboxCssCode,
                label: 'CSS-код (Flexbox)',
            },
        ],
    },
    // {
    //     id: NavigationIdLab21.Conclusion,
    //     label: 'Висновки',
    // },
]
</script>

<style lang="scss"></style>
