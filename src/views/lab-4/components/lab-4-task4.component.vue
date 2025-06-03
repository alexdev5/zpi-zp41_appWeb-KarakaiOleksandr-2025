<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p class="border-bottom pb-16 mb-16">
                <br />Створити html-розміту, яка складається з наступних
                елементів : текст, блок (div), дві кнопки <br />
                Кнопка &quot;Зменшити&quot; робить квадрат менше на 15 пікселів.
                Повторний натиск на кнопці Зменшити&quot; робить квадрат ще
                менше на 15 пікселів. &quot;Збільшити&quot; – робить квадрат
                більше на 15 пікселів. Повторний натиск на кнопці
                &quot;Зменшити&quot; робить квадрат ще більше на 15 пікселів.
            </p>

            <div class="grid gap-16">
                <div class="square"></div>
                <div class="flex gap-16">
                    <AppBtn @click="decrease('square')">Зменшити</AppBtn>
                    <AppBtn @click="increase('square')" variant="primary"
                        >Збільшити</AppBtn
                    >
                </div>
            </div>
        </div>
        <!-- # -->
        <div class="flex gap-16">
            <div class="flex gap-16">
                <code class="code-block">
                    <b>HTML code:</b>
                    <pre>
&lt;div class="grid gap-16"&gt;
    &lt;div class="square"&gt;&lt;/div&gt;
        &lt;div class="flex gap-16"&gt;
        &lt;AppBtn @click="decrease('square')"&gt;Зменшити&lt;/AppBtn&gt;
        &lt;AppBtn @click="increase('square')"&gt;Збільшити&lt;/AppBtn&gt;
    &lt;/div&gt;
&lt;/div&gt;
                </pre
                    >
                    <b>CSS code:</b>
                    <pre>
.square {
    width: 15px;
    height: 15px;
    border: 2px dashed red;
}
                    </pre>
                </code>
            </div>
            <div class="flex gap-16">
                <code class="code-block">
                    <b>JS code:</b>
                    <pre>
function increase(className: string) {
    const el = document.querySelector(`.${className}`) as HTMLElement
    if (!el) return

    const currentWidth = el.offsetWidth
    const currentHeight = el.offsetHeight

    el.style.width = currentWidth + 15 + 'px'
    el.style.height = currentHeight + 15 + 'px'
}

function decrease(className: string) {
    const el = document.querySelector(`.${className}`) as HTMLElement
    if (!el) return

    const currentWidth = el.offsetWidth
    const currentHeight = el.offsetHeight

    el.style.width = Math.max(currentWidth - 15, 15) + 'px'
    el.style.height = Math.max(currentHeight - 15, 15) + 'px'
}
                    </pre>
                </code>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/app-btn.component.vue'
import { ref } from 'vue'

const width = ref(15)
const height = ref(15)

function increase(className: string) {
    const el = document.querySelector(`.${className}`) as HTMLElement
    if (!el) return

    const currentWidth = el.offsetWidth
    const currentHeight = el.offsetHeight

    el.style.width = currentWidth + 15 + 'px'
    el.style.height = currentHeight + 15 + 'px'
}

function decrease(className: string) {
    const el = document.querySelector(`.${className}`) as HTMLElement
    if (!el) return

    const currentWidth = el.offsetWidth
    const currentHeight = el.offsetHeight

    el.style.width = Math.max(currentWidth - 15, 15) + 'px'
    el.style.height = Math.max(currentHeight - 15, 15) + 'px'
}
</script>
<style lang="scss">
.square {
    width: 15px;
    height: 15px;
    border: 2px dashed red;
}
</style>
