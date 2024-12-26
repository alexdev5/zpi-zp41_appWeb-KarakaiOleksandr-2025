<template>
    <ul class="lab-work-navigation">
        <li v-for="record in records" :class="{ active: parentActive }">
            <button @click="emit('parent-selected', record.id)">
                {{ record.label }}
            </button>

            <template v-if="record.children?.length">
                <ul class="lab-work-navigation-children">
                    <li
                        v-for="child in record.children"
                        :class="{ active: childActive }"
                    >
                        <button @click="selectChild(record.id, child.id)">
                            {{ child.label }}
                        </button>
                    </li>
                </ul>
            </template>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { NavigationIdLab1, type NavigationRecord } from '../types'

defineProps<{
    parentActive: NavigationIdLab1
    childActive?: NavigationIdLab1
}>()

const emit = defineEmits(['parent-selected', 'child-selected'])

const records: NavigationRecord[] = [
    {
        id: NavigationIdLab1.Description,
        label: 'Опис предметного середовища',
    },
    {
        id: NavigationIdLab1.Purpose,
        label: 'Тема, мета, мізце розташування',
    },
    {
        id: NavigationIdLab1.Purpose,
        label: 'Структура документу',
        children: [
            {
                id: 1,
                label: 'HTML код таблиць',
            },
            {
                id: 1,
                label: 'HTML код форми',
            },
            {
                id: 1,
                label: 'HTML код зображення',
            },
        ],
    },
]

function selectChild(parent: NavigationIdLab1, child: NavigationIdLab1) {
    emit('child-selected', {
        parent: parent,
        child: child,
    })
}
</script>

<style lang="scss"></style>
