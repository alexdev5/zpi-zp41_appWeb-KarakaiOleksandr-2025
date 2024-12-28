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
            v-if="navigationItemActive === NavigationIdLab1.Structure"
        />
        <HtmlTable v-if="navigationItemActive === NavigationIdLab1.HtmlTable" />
        <HtmlForm v-if="navigationItemActive === NavigationIdLab1.HtmlForm" />
        <HtmlImage v-if="navigationItemActive === NavigationIdLab1.HtmlImage" />
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
import HtmlImage from './components/html-table.component.vue'
import HtmlForm from './components/html-form.component.vue'
import Lab1Conclusion from './components/lab-1-conclusion.component.vue'

import type { AsideNavigationRecord } from '@/components/layout/types.ts'

import { ref } from 'vue'

enum NavigationIdLab1 {
    Target,
    Description,
    Structure,
    HtmlTable,
    HtmlForm,
    HtmlImage,
    Conclusion,
}

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
                label: 'HTML код таблиць',
            },
            {
                id: NavigationIdLab1.HtmlForm,
                label: 'HTML код форми',
            },
            {
                id: NavigationIdLab1.HtmlImage,
                label: 'HTML код зображення',
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
