<template>
    <header>
        <div class="header-actions">
            <div class="flex gap-16 ai-center">
                <RouterLink :to="{ name: RouteName.Home }"> Головна</RouterLink>
                <button
                    class="show-more"
                    @click="detailsOpened = !detailsOpened"
                    v-html="showMoreBtnContent"
                />
                <AppBtn
                    size="sm"
                    :variant="store.isOneSemester ? 'secondary' : 'third'"
                    outlined
                    @click="toggleSemester(Semester.One)"
                >
                    Семестр 1
                </AppBtn>
                <AppBtn
                    size="sm"
                    :variant="store.isTwoSemester ? 'secondary' : 'third'"
                    outlined
                    @click="toggleSemester(Semester.Two)"
                >
                    Семестр 2
                </AppBtn>
            </div>
            <a href="https://github.com/alexdev5" target="_blank">github.com</a>
        </div>

        <template v-if="detailsOpened">
            <p class="header-title">
                {{
                    store.isOneSemester
                        ? content.common.headerTitle
                        : content.common.headerTitleSemesterTwo
                }}
            </p>
            <p>
                Виконавець: Студент групи ЗПІ-зп41
                <a href="https://github.com/alexdev5" target="_blank">
                    <b>Каракай Олександр Вікторович</b>
                </a>
            </p>
        </template>

        <AppNavigation />
    </header>
</template>

<script lang="ts" setup>
import AppNavigation from './app-navigation.component.vue'
import AppBtn from '@/components/ui/app-btn.component.vue'

import { content } from '@/content'
import { RouteName } from '@/router'
import { computed, ref } from 'vue'
import { Semester } from '@/app.types.ts'
import { useAppStore } from '@/app.store.ts'

const store = useAppStore()

const detailsOpened = ref(true)
const showMoreBtnContent = computed(() =>
    detailsOpened.value
        ? `Згорнути <span>-</span>`
        : `Рознорнути <span>+</span>`
)

function toggleSemester(semester: Semester) {
    store.state.semester = semester
}
</script>

<style lang="scss">
@use '@/styles/utils/media' as *;

header {
    display: grid;
    gap: 8px;
    background-color: var(--app-color-n-96);
    padding-block: 16px 24px;
    padding-inline: 24px;
    position: relative;
    z-index: 1;

    box-shadow:
        0px 1px 2px 0px rgba(0, 0, 0, 0.3),
        0px 2px 6px 2px rgba(0, 0, 0, 0.15);

    .header-title {
        font-size: 1rem;

        @include mobile {
            font-size: 1.4rem;
        }
    }

    .nav-menu {
        margin-block-start: 16px;
    }

    .header-actions {
        display: flex;
        justify-content: space-between;
    }

    .show-more {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 10px;

        span {
            font-size: 1.3rem;
            font-weight: 400;
        }
    }
}
</style>
