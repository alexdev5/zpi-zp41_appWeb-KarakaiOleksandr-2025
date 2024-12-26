<template>
    <AppPageContent>
        <template #navigation>
            <Lab1Navigation
                :parent-active="parentActive"
                :child-active="childActive"
                @parent-selected="selectParent($event)"
                @child-selected="selectChild($event)"
            />
        </template>
    </AppPageContent>
</template>

<script lang="ts" setup>
import AppPageContent from '@/components/layout/app-page-content.component.vue'
import Lab1Navigation from './components/lab-work-navigation.component.vue'

import { ref } from 'vue'
import { type ChildSelectEvent, NavigationIdLab1 } from './types'

const parentActive = ref(NavigationIdLab1.Description)
const childActive = ref()

function selectParent(id: NavigationIdLab1) {
    parentActive.value = id
    childActive.value = undefined
}

function selectChild({ parent, child }: ChildSelectEvent) {
    parentActive.value = parent
    childActive.value = child
}
</script>

<style lang="scss"></style>
