<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                Напиши скрипт, який змінює колір фону
                елемента &lt;body&gt; через інлайн-стиль по кліку
                на button.change-color і задає це значення кольору текстовим
                вмістом для span.color. <br />
                Для генерування випадкового кольору використовуй
                функцію getRandomHexColor().
                <code>
                    <pre>
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
                </pre
                    >
                </code>
                <br />
                Зверни увагу, що функція getRandomHexColor() повертає колір у
                hex-форматі, в той час як колір фону на &lt;body&gt; буде у
                форматі rgb. Це нормально й не потребує якихось правок.
            </p>
            <div class="flex gap-16">
                <div
                    class="lab-4-8-color-block flex ai-center justify-center"
                    :style="{ 'background-color': color }"
                >
                    <h1>color: {{ color }}</h1>
                </div>
                <AppBtn @click="changeColor()">change-color</AppBtn>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AppBtn from '@/components/ui/app-btn.component.vue'

const color = ref(getRandomHexColor())

function changeColor() {
    color.value = getRandomHexColor()
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`
}
</script>
<style>
.lab-4-8-color-block {
    width: 400px;
    height: 400px;

    h1 {
        color: #fff;
    }
}
</style>
