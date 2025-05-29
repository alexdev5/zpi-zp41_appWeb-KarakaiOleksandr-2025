<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p class="border-bottom pb-16 mb-16">
                <br />Створити html-розміту, яка складається з наступних
                елементів : текст, маркирований список. <br />
                Натиснувши кнопку &quot;Подвоїти&quot;, збільшити значення у
                кожному елементі списку у 2 рази. Повторний натиск на кнопці
                &quot;Подвоїти&quot;, також збільшить значення у кожному
                елементі списку у 2 рази
            </p>

            <div class="flex gap-24 ai-start">
                <div class="grid gap-16 full">
                    <h4>Framework (count: {{ countClick }})</h4>
                    <ul class="framework">
                        <li v-for="number in numbers">
                            {{ number }}
                        </li>
                    </ul>
                    <div class="flex gap-16">
                        <AppBtn @click="double()">Подвоїти</AppBtn>
                        <AppBtn @click="reset()">Скинути</AppBtn>
                    </div>

                    <div class="flex gap-16">
                        <code class="code-block">
                            <b>HTML code:</b>
                            <pre>
&lt;ul class="framework"&gt;
    &lt;li v-for="number in numbers"&gt;
       `${number}`
    &lt;/li&gt;
&lt;/ul&gt;
&lt;div class="flex gap-16"&gt;
    &lt;AppBtn @click="double()"&gt;Подвоїти&lt;/AppBtn&gt;
    &lt;AppBtn @click="reset()"&gt;Скинути&lt;/AppBtn&gt;
&lt;/div&gt;

                            </pre>
                        </code>
                    </div>
                    <div class="flex gap-16">
                        <code class="code-block">
                            <b>JS code:</b>
                            <pre>
const originalNumbers = ref([1, 4, 8, 16, 20, 30])
const numbers = ref([...originalNumbers.value])
const countNativeClick = ref(0)
const countClick = ref(0)

function double() {
    numbers.value = numbers.value.map((number) => number * 2)
    countClick.value += 1
}

function reset() {
    numbers.value = [...originalNumbers.value]
    countClick.value = 0
}
                            </pre>
                        </code>
                    </div>
                </div>

                <div class="grid gap-16 full">
                    <h4>Native (count: {{ countNativeClick }})</h4>
                    <ul class="doubling-element">
                        <li data-number-default="1">1</li>
                        <li data-number-default="4">4</li>
                        <li data-number-default="8">8</li>
                        <li data-number-default="16">16</li>
                        <li data-number-default="20">20</li>
                        <li data-number-default="30">30</li>
                        <li data-number-default="40">40</li>
                        <li data-number-default="50">50</li>
                    </ul>
                    <div class="flex gap-16">
                        <AppBtn class="btn-double">Подвоїти</AppBtn>
                        <AppBtn class="btn-reset">Скинути</AppBtn>
                    </div>
                    <!-- #HTML -->
                    <div class="flex gap-16">
                        <code class="code-block">
                            <b>HTML code:</b>
                            <pre>
&lt;ul class="doubling-element"&gt;
    &lt;li data-number-default="1"&gt;1&lt;/li&gt;
    &lt;li data-number-default="4"&gt;4&lt;/li&gt;
    &lt;li data-number-default="8"&gt;8&lt;/li&gt;
    &lt;li data-number-default="16"&gt;16&lt;/li&gt;
    &lt;li data-number-default="20"&gt;20&lt;/li&gt;
    &lt;li data-number-default="30"&gt;30&lt;/li&gt;
    &lt;li data-number-default="30"&gt;40&lt;/li&gt;
    &lt;li data-number-default="30"&gt;50&lt;/li&gt;
&lt;/ul&gt;
&lt;div class="flex gap-16"&gt;
    &lt;button class="app-btn size-sm third btn-double"&gt;Подвоїти&lt;/button&gt;
    &lt;button class="app-btn size-sm third btn-double"&gt;Скинути&lt;/button&gt;
&lt;/div&gt;

                            </pre>
                        </code>
                    </div>
                    <!-- #JS -->
                    <div class="flex gap-16">
                        <code class="code-block">
                            <b>JS code:</b>
                            <pre>
const list = document.querySelectorAll&lt;HTMLElement&gt;('.doubling-element li')

document.querySelector('.btn-double')?.addEventListener('click', () => {
    list.forEach((element) => {
        const text = element.textContent?.trim() ?? ''
        const number = Number(text)

        if (isNaN(number)) return

        element.textContent = `${number * 2}`
    })

    countNativeClick.value += 1
})

document.querySelector('.btn-reset')?.addEventListener('click', () => {
    list.forEach((element) => {
        const text = element.dataset.numberDefault?.trim()
        const number = Number(text)

        if (isNaN(number)) return

        element.textContent = String(number)
    })

    countNativeClick.value = 1
})
                            </pre>
                        </code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/app-btn.component.vue'
import { onMounted, ref } from 'vue'

const originalNumbers = ref([1, 4, 8, 16, 20, 30, 40, 50])
const numbers = ref([...originalNumbers.value])
const countNativeClick = ref(0)
const countClick = ref(0)

function double() {
    numbers.value = numbers.value.map((number) => number * 2)
    countClick.value += 1
}

function reset() {
    numbers.value = [...originalNumbers.value]
    countClick.value = 0
}

onMounted(() => {
    const list = document.querySelectorAll<HTMLElement>('.doubling-element li')

    document.querySelector('.btn-double')?.addEventListener('click', () => {
        list.forEach((element) => {
            const text = element.textContent?.trim() ?? ''
            const number = Number(text)

            if (isNaN(number)) return

            element.textContent = `${number * 2}`
        })

        countNativeClick.value += 1
    })

    document.querySelector('.btn-reset')?.addEventListener('click', () => {
        list.forEach((element) => {
            const text = element.dataset.numberDefault?.trim()
            const number = Number(text)

            if (isNaN(number)) return

            element.textContent = String(number)
        })

        countNativeClick.value = 0
    })
})
</script>
<style lang="scss">
.square {
    width: 15px;
    height: 15px;
    border: 2px dashed red;
}
</style>
