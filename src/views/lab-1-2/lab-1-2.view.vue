<template>
    <AppPageContent
        :records="records"
        :navigation-item-active="navigationItemActive"
        @navigation-selected="navigationItemActive = $event"
    >
        <lab12Target />
        <Lab12ConnectingFonts />
    </AppPageContent>
</template>

<script lang="ts" setup>
import lab12Target from './componetns/lab-1-2-target.component.vue'
import Lab12ConnectingFonts from './componetns/lab-1-2-connecting-fonts.component.vue'
import AppPageContent from '@/components/layout/app-page-content/app-page-content.component.vue'

import { ref } from 'vue'
import { NavigationIdLab2 } from './type.ts'
import type { AsideNavigationRecord } from '@/components/layout/types.ts'

const navigationItemActive = ref(NavigationIdLab2.Target)

const records: AsideNavigationRecord[] = [
    {
        id: NavigationIdLab2.Target,
        label: 'Тема, мета, мізце розташування',
    },
    {
        id: NavigationIdLab2.ConnectingFonts,
        label: 'Опис предметного середовища',
    },
    {
        id: NavigationIdLab1.Structure,
        label: 'Структура HTML документу',
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