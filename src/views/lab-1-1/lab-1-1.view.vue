<template>
    <AppPageContent
        :records="records"
        :navigation-item-active="navigationItemActive"
        @navigation-selected="navigationItemActive = $event"
    >
        <Lab1Target v-if="navigationItemActive === NavigationIdLab1.Target" />
        <AppDescription
            v-if="navigationItemActive === NavigationIdLab1.Description"
        />
        <Lab1Structure
            @selected="navigationItemActive = $event"
            v-if="navigationItemActive === NavigationIdLab1.Structure"
        />
        <HtmlTable v-if="navigationItemActive === NavigationIdLab1.HtmlTable" />
        <HtmlForm v-if="navigationItemActive === NavigationIdLab1.HtmlForm" />
        <HtmlImage v-if="navigationItemActive === NavigationIdLab1.HtmlImage" />
        <Lab1Headers
            v-if="navigationItemActive === NavigationIdLab1.HtmlHeader"
        />
        <Lab1Lists v-if="navigationItemActive === NavigationIdLab1.HtmlLists" />
        <Lab1Conclusion
            v-if="navigationItemActive === NavigationIdLab1.Conclusion"
        />
    </AppPageContent>
</template>

<script lang="ts" setup>
import AppPageContent from '@/components/layout/app-page-content/app-page-content.component.vue'
import Lab1Target from './components/lab-1-target.component.vue'
import AppDescription from '@/views/shared/app-description.component.vue'
import Lab1Structure from './components/lab-1-structure.component.vue'
import HtmlTable from './components/html-table.component.vue'
import HtmlImage from './components/html-image.component.vue'
import HtmlForm from './components/html-form.component.vue'
import Lab1Headers from './components/lab-1-headers.component.vue'
import Lab1Lists from './components/lab-1-lists.component.vue'
import Lab1Conclusion from './components/lab-1-conclusion.component.vue'

import type { AsideNavigationRecord } from '@/components/layout/types.ts'

import { ref } from 'vue'
import { NavigationIdLab1 } from '@/views/lab-1-1/type.ts'

const navigationItemActive = ref(NavigationIdLab1.Target)

const records: AsideNavigationRecord[] = [
    {
        id: NavigationIdLab1.Target,
        label: 'Тема, мета, мізце розташування',
    },
    {
        id: NavigationIdLab1.Description,
        label: 'Опис предметного середовища',
    },
    {
        id: NavigationIdLab1.Structure,
        label: 'Структура документу',
        children: [
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
        ],
    },
    {
        id: NavigationIdLab1.Conclusion,
        label: 'Висновки',
    },
]
</script>

<style lang="scss"></style>
