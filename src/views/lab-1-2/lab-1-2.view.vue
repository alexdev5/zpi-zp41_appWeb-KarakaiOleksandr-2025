<template>
    <AppPageContent
        :records="records"
        :navigation-item-active="navigationItemActive"
        @navigation-selected="navigationItemActive = $event"
    >
        <Lab12Target v-if="navigationItemActive === NavigationIdLab2.Target" />
        <Lab12ConnectingStyles
            v-if="navigationItemActive === NavigationIdLab2.ConnectingStyles"
        />
        <Lab12Selectors
            v-if="navigationItemActive === NavigationIdLab2.Selectors"
        />
        <Lab12IndependentWork2
            v-if="navigationItemActive === NavigationIdLab2.IndependentWork2"
            @selected="navigationItemActive = $event"
        />
        <Lab12Fonts
            v-if="
                navigationItemActive === NavigationIdLab2.IndependentWork2Fonts
            "
        />
        <Lab12CssTables
            v-if="
                navigationItemActive ===
                NavigationIdLab2.IndependentWork2CssTables
            "
        />
    </AppPageContent>
</template>

<script lang="ts" setup>
import Lab12Target from './componetns/lab-1-2-target.component.vue'
import Lab12ConnectingStyles from './componetns/lab-1-2-connecting-styles.component.vue'
import Lab12Selectors from './componetns/lab-1-2-selectors.component.vue'
import AppPageContent from '@/components/layout/app-page-content/app-page-content.component.vue'
import Lab12IndependentWork2 from './componetns/lab-1-2-independent-work-2.component.vue'
import Lab12Fonts from './componetns/lab-1-2-fonts.component.vue'
import Lab12CssTables from './componetns/lab-1-2-css-tables.component.vue'

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
        id: NavigationIdLab2.ConnectingStyles,
        label: 'Способи підключення стилів',
    },
    {
        id: NavigationIdLab2.Selectors,
        label: 'Селектори',
        // children: [
        //     {
        //         id: NavigationIdLab2.TagSelector,
        //         label: 'Селектор тегу',
        //     },
        //     {
        //         id: NavigationIdLab2.ClassSelector,
        //         label: 'Селектор класу',
        //     },
        //     {
        //         id: NavigationIdLab2.IdSelector,
        //         label: 'Селектор ідентифікатор',
        //     },
        //     {
        //         id: NavigationIdLab2.OtherSelector,
        //         label: 'Інші селектори',
        //     },
        // ],
    },
    {
        id: NavigationIdLab2.IndependentWork2,
        label: 'Самостійна робота №2',
        children: [
            {
                id: NavigationIdLab2.IndependentWork2Fonts,
                label: 'Шрифт. Google Fonts',
            },
            {
                id: NavigationIdLab2.IndependentWork2CssTables,
                label: 'CSS: Таблиці. Фон. Списки',
            },
        ],
    },
    // {
    //     id: NavigationIdLab2.Conclusion,
    //     label: 'Висновки',
    // },
]
</script>

<style lang="scss"></style>
