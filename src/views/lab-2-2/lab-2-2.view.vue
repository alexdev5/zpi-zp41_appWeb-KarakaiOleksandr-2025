<template>
    <AppPageContent
        :records="records"
        :navigation-item-active="navigationItemActive"
        @navigation-selected="navigationItemActive = $event"
    >
        <Lab21Target v-if="navigationItemActive === NavigationIdLab22.Target" />
        <Lab22MediaQueries
            v-if="navigationItemActive === NavigationIdLab22.MediaQueries"
        />
        <Lab22ContainerQueries
            v-if="navigationItemActive === NavigationIdLab22.ContainerQueries"
        />
        <Lab22Grid v-if="navigationItemActive === NavigationIdLab22.Grid" />
    </AppPageContent>
</template>

<script lang="ts" setup>
import AppPageContent from '@/components/layout/app-page-content/app-page-content.component.vue'
import Lab21Target from '@/views/lab-2-2/componetns/lab-2-2-target.component.vue'
import Lab22MediaQueries from './componetns/lab-2-2-media-queries.component.vue'
import Lab22ContainerQueries from './componetns/lab-2-2-container-queries.component.vue'
import Lab22Grid from './componetns/lab-2-2-grid.component.vue'

import { ref } from 'vue'
import type { AsideNavigationRecord } from '@/components/layout/types.ts'
import { NavigationIdLab22 } from './type.ts'

const navigationItemActive = ref(NavigationIdLab22.Target)

const records: AsideNavigationRecord[] = [
    {
        id: NavigationIdLab22.Target,
        label: 'Тема, мета, мізце розташування',
    },
    {
        id: NavigationIdLab22.MediaQueries,
        label: 'Media queries',
    },
    {
        id: NavigationIdLab22.ContainerQueries,
        label: 'Container queries',
    },
    {
        id: NavigationIdLab22.Grid,
        label: 'Grid Layout',
    },
]
</script>

<style lang="scss"></style>
