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

const routes = [
    { name: RouteName.Lab1_1, label: 'Лабораторна робота № 1.1' },
    { name: RouteName.Lab1_2, label: 'Лабораторна робота № 1.2' },
    { name: RouteName.Lab2_1, label: 'Лабораторна робота № 2.1' },
    { name: RouteName.Lab2_2, label: 'Лабораторна робота № 2.2' },
    { name: RouteName.Lab3_1, label: 'Лабораторна робота № 3.1' },
    { name: RouteName.Lab3_2, label: 'Лабораторна робота № 3.2' },
]
</script>

<style lang="scss">
.nav-menu {
    display: flex;
    gap: 16px;

    a {
        text-decoration: none;
    }
}

.nav-menu-item {
    border: 1px solid var(--app-color-p-40);
    padding: 8px 16px;
    border-radius: 10px;
    transition: all 0.2s linear;
    background: var(--app-color-secondary);
    font-size: 0.95rem;

    &:hover,
    &.router-link-active {
        background-color: var(--app-color-p-40);
        color: var(--app-color-secondary);
    }
}
</style>
