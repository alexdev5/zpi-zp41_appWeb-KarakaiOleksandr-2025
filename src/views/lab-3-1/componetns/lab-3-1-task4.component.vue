<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                1. Створити одновимірний масив, кількість елементів якого задана
                користувачем. Знайти суму елементів з парними індексами,
                максимальний елемент та його індекс, мінімальний елемент та його
                індекс серед елементів з непарними індексами. Застосувати
                функції
            </p>
            <p>
                2. Упорядкувати масив у порядку зростання, Надрукувати вхідний
                та вихідний масив. Застосувати функції
            </p>
        </div>

        <div class="grid gap-16 function-checking-container">
            <div class="flex-column gap-16 function-checking-params">
                <label>
                    <span>Array Length</span>
                    <input type="number" v-model="arrayLength" />
                </label>
            </div>

            <div class="flex-column gap-16">
                <code class="code-block">
                    <i>Вхідний масив:</i>
                    {{ originalArray }}
                </code>
                <code class="code-block">
                    <i>Сума елементів з парними індексами:</i>
                    {{ sumEvenIndexedElements(originalArray) }}
                </code>
                <code class="code-block">
                    <div>
                        <i>Максимальний елемент:</i>
                        {{ findMaxElement(originalArray).max }}
                    </div>
                    <div>
                        <i>Індекс:</i>
                        {{ findMaxElement(originalArray).index }}
                    </div>
                </code>
                <code class="code-block">
                    <div>
                        <i>Мінімальний елемент з непарними індексами:</i>
                        {{ findMinElementOddIndexed(originalArray).min }}
                    </div>
                    <div>
                        <i>Індекс:</i>
                        {{ findMinElementOddIndexed(originalArray).index }}
                    </div>
                </code>
                <code class="code-block">
                    <div>
                        <i>Вихідний масив (упорядкований):</i>
                        {{ sortArrayAscending(originalArray) }}
                    </div>
                </code>
            </div>

            <code class="code-block">
                function createArray(length: number = 0) &#123;<br />
                &nbsp;&nbsp;return Array.from(&#123; length &#125;, () =><br />
                &nbsp;&nbsp;&nbsp;&nbsp;Math.floor(Math.random() * 100)<br />
                &nbsp;&nbsp;)<br />
                &#125;<br />
                <br />
                // Функція для знаходження суми елементів з парними індексами<br />
                function sumEvenIndexedElements(array: number[]): number
                &#123;<br />
                &nbsp;&nbsp;return array.reduce(<br />
                &nbsp;&nbsp;&nbsp;&nbsp;(sum, value, index) => (index % 2 === 0
                ? sum + value : sum),<br />
                &nbsp;&nbsp;&nbsp;&nbsp;0<br />
                &nbsp;&nbsp;)<br />
                &#125;<br />
                <br />
                function findMaxElement(array: number[]): &#123; max: number;
                index: number &#125; &#123;<br />
                &nbsp;&nbsp;const result = array<br />
                &nbsp;&nbsp;&nbsp;&nbsp;.map((value, idx) => (&#123; value, idx
                &#125;))<br />
                &nbsp;&nbsp;&nbsp;&nbsp;.reduce((acc, curr) => (curr.value >
                acc.value ? curr : acc), &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: array[0],<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idx: 0<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br />
                <br />
                &nbsp;&nbsp;return &#123; max: result.value, index: result.idx
                &#125;<br />
                &#125;<br />
                <br />
                // Функція для знаходження мінімального елемента та його індекса
                серед елементів з непарними індексами<br />
                function findMinElementOddIndexed(array: number[]): &#123;<br />
                &nbsp;&nbsp;min: number<br />
                &nbsp;&nbsp;index: number<br />
                &#125; &#123;<br />
                &nbsp;&nbsp;const result = array<br />
                &nbsp;&nbsp;&nbsp;&nbsp;.map((value, idx) => (&#123; value, idx
                &#125;))<br />
                &nbsp;&nbsp;&nbsp;&nbsp;.filter((&#123; idx &#125;) => idx % 2
                !== 0)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;.reduce((acc, curr) => (acc.value <
                curr.value ? acc : curr), &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: Number.MAX_VALUE,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idx: 0<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br />
                &nbsp;&nbsp;return &#123; min: result.value, index: result.idx
                &#125;<br />
                &#125;<br />
                <br />
                // Функція для сортування масиву у порядку зростання<br />
                function sortArrayAscending(array: number[]): number[] &#123;<br />
                &nbsp;&nbsp;return [...array].sort((a, b) => a - b)<br />
                &#125;<br />
            </code>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

const arrayLength = ref(10)
const originalArray = ref<number[]>([])

function createArray(length: number = 0) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100))
}

// Функція для знаходження суми елементів з парними індексами
function sumEvenIndexedElements(array: number[]): number {
    return array.reduce((sum, value, index) => {
        if (index % 2 === 0) {
            return sum + value
        }
        return sum
    }, 0)
}

function findMaxElement(array: number[]): { max: number; index: number } {
    const result = array
        .map((value, idx) => ({ value, idx }))
        .reduce((acc, curr) => (curr.value > acc.value ? curr : acc), {
            value: array[0],
            idx: 0,
        })

    return { max: result.value, index: result.idx }
}

// Функція для знаходження мінімального елемента та його індекса серед елементів з непарними індексами
function findMinElementOddIndexed(array: number[]): {
    min: number
    index: number
} {
    const result = array
        .map((value, idx) => ({ value, idx }))
        .filter(({ idx }) => idx % 2 !== 0)
        .reduce((acc, curr) => (acc.value < curr.value ? acc : curr), {
            value: Number.MAX_VALUE,
            idx: 0,
        })
    return { min: result.value, index: result.idx }
}

// Функція для сортування масиву у порядку зростання
function sortArrayAscending(array: number[]): number[] {
    return [...array].sort((a, b) => a - b)
}

watch(
    () => arrayLength.value,
    (newValue) => {
        originalArray.value = createArray(newValue)
    }
)
onMounted(() => {
    originalArray.value = createArray(arrayLength.value)
})
</script>

<style lang="scss">
.function-checking-container-task-3 {
    grid-template-columns: 1fr 1fr;
}
</style>
