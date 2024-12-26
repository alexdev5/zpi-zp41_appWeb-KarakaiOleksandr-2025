<template>
    <header>
        <p class="header-title">{{ content.common.headerTitle }}</p>
        <p>
            Виконавець: Студент групи ЗПІ-зп41
            <b>Каракай Олександр Вікторович</b>
        </p>
        <AppNavigation />
    </header>
</template>

<script lang="ts" setup>
import AppNavigation from './app-navigation.component.vue'

import { content } from '@/content'
</script>

<style lang="scss">
header {
    display: grid;
    gap: 8px;
    background-color: var(--app-color-n-96);

    .header-title {
        font-size: 1.4rem;
    }

    .nav-menu {
        margin-block-start: 24px;
    }
}
</style>
