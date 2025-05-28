<template>
    <div class="app-wrapper" :class="classes">
        <AppHeader />

        <div class="app-body">
            <RouterView />
        </div>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/navigation/app-header.component.vue'
import AppFooter from '@/components/navigation/app-footer.component.vue'
import { useAppStore } from '@/app.store.ts'
import { computed } from 'vue'

const store = useAppStore()

const classes = computed(() => ({
    [`semester-${store.state.semester}`]: true,
}))
</script>
