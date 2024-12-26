<template>
    <nav class="nav-menu">
        <RouterLink
            v-for="route in routes"
            :to="{ name: route.name }"
            class="nav-menu-item"
        >
            {{ route.label }}
        </RouterLink>
    </nav>
</template>

<script lang="ts" setup>
import { RouteName } from '@/router'
//import { content } from '@/content'

const routes = [
    { name: RouteName.Lab1, label: 'Лабораторна робота № 1.1' },
    { name: RouteName.Home, label: 'Лабораторна робота № 1.2' },
    { name: RouteName.Home, label: 'Лабораторна робота № 2.1' },
    { name: RouteName.Home, label: 'Лабораторна робота № 2.2' },
    { name: RouteName.Home, label: 'Лабораторна робота № 3.1' },
    { name: RouteName.Home, label: 'Лабораторна робота № 3.2' },
]
</script>

<style lang="scss">
.nav-menu {
    display: flex;
    gap: 16px;
}

.nav-menu-item {
    border: 1px solid var(--app-color-p-80);
    padding: 8px 16px;
    border-radius: 10px;
    transition: all 0.2s linear;

    &:hover,
    &.router-link-active {
        //background-color: var(--app-color-p-90);
        background-color: var(--app-color-p-40);
        color: var(--app-color-secondary);
    }
}
</style>
