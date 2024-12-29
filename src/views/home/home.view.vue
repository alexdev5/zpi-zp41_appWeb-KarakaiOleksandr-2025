<template>
    <section class="home-content grid gap-16">
        <AppDescription />

        <div>
            <RouterLink :to="{ name: RouteName.Lab1_1 }" class="nav-menu-item">
                Почати
            </RouterLink>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppDescription from '@/views/shared/app-description.component.vue'
import { RouteName } from '@/router'
</script>

<style lang="scss">
.home-content {
    padding: 24px;
}
</style>
