<template>
    <section class="home-content">
        <AppDescription />

        <RouterLink
            v-for="route in routes"
            :to="{ name: route.name }"
            class="nav-menu-item"
        >
            {{ route.label }}
        </RouterLink>
    </section>
</template>

<script lang="ts" setup>
import AppDescription from '@/views/shared/app-description.component.vue'
</script>

<style lang="scss">
.home-content {
    padding: 24px;
}
</style>
