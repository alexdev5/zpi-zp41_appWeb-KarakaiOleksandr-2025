<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                Напиши скрипт створення й очищення колекції елементів з
                наступним функціоналом. Є input, у який користувач вводить
                бажану кількість елементів. <br />Після натискання на
                кнопку Create має рендеритися (додаватися в DOM) колекція з
                відповідною кількістю елементів і очищатися значення в інпуті.
                При повторному натисканні на кнопку Create поверх старої
                колекції має рендеритись нова. Після натискання на
                кнопку Destroy колекція елементів має очищатися. <br />
                Після натискання користувачем на кнопку Create треба
                провалідувати значення в input, воно має бути в межах від 1 до
                100 включно. Тільки якщо воно задоволяє умову, мають додаватися
                нові &lt;div&gt; елементи в DOM. Для рендеру елементів на
                сторінці створи функцію createBoxes(amount), яка приймає один
                параметр — число, що зберігає кількість елементів для рендеру.
                Функція має створювати стільки &lt;div&gt; елементів, скільки
                вказано в параметрі amount і додавати їх у DOM дочірніми
                елементами для div#boxes. <br />
                1. Розміри першого &lt;div&gt; елемента мають бути
                <b>30px</b> на <b>30px</b>.
                <br />
                2. Кожен наступний елемент повинен бути ширшим і вищим від
                попереднього на <b>10px</b>. <br />
                3. Усі елементи повинні мати випадковий колір фону. Використовуй
                готову функцію getRandomHexColor() для отримання випадкового
                кольору. <br />
                <br />
                Для очищення колекції після натискання на кнопку Destroy створи
                функцію destroyBoxes(), яка очищає вміст div#boxes, у такий
                спосіб видаляючи всі створені елементи.
            </p>
            <hr />
            <div class="grid gap-32">
                <div id="controls" class="flex gap-16">
                    <input
                        type="number"
                        min="1"
                        max="100"
                        step="1"
                        @input="onInput"
                        v-model="inputModel"
                    />
                    <div class="flex gap-16">
                        <AppBtn variant="primary" @click="create()"
                            >Create</AppBtn
                        >
                        <AppBtn @click="destroyBoxes()">Destroy</AppBtn>
                    </div>
                </div>
                <div id="boxes"></div>
            </div>
            <div class="flex gap-16">
                <code class="code-block">
                    <pre>
function createBoxes(amount: number) {
    const boxesContainer = document.getElementById('boxes')
    if (!boxesContainer) return

    boxesContainer.innerHTML = ''

    const baseSize = 30

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div')
        const size = baseSize + i * 10

        box.style.width = `${size}px`
        box.style.height = `${size}px`
        box.style.backgroundColor = getRandomHexColor()
        box.textContent = `${size}x${size}`

        boxesContainer.appendChild(box)
    }
}
                    </pre>
                </code>
                <code class="code-block">
                    <pre>
function onInput(evt: Event) {
    const input = evt.target as HTMLInputElement
    let value = Number(input.value.trim())

    if (isNaN(value) || value < 1) value = 1

    if (value > 100) value = 100

    input.value = `${value}`
}
                    </pre>
                </code>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/app-btn.component.vue'
import { ref, watch } from 'vue'

const inputModel = ref(1)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`
}

function onInput(evt: Event) {
    const input = evt.target as HTMLInputElement
    let value = Number(input.value.trim())

    if (isNaN(value) || value < 1) value = 1

    if (value > 100) value = 100

    input.value = `${value}`
}

function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes')
    if (!boxesContainer) return

    boxesContainer.innerHTML = ''
}

function create() {
    createBoxes(inputModel.value)
    inputModel.value = 1
}

function createBoxes(amount: number) {
    const boxesContainer = document.getElementById('boxes')
    if (!boxesContainer) return

    boxesContainer.innerHTML = ''

    const baseSize = 30

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div')
        const size = baseSize + i * 10

        box.style.width = `${size}px`
        box.style.height = `${size}px`
        box.style.backgroundColor = getRandomHexColor()
        box.textContent = `${size}x${size}`

        boxesContainer.appendChild(box)
    }
}

watch([inputModel], (newValue) => {
    if (inputModel.value > 100) inputModel.value = 100
    if (inputModel.value < 1) inputModel.value = 1
})
</script>
<style>
#boxes {
    padding: 16px;
    border: 1px solid #c0c0c0;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.2);

    div {
        min-width: 15px;
        min-height: 15px;
        font-size: 0.8rem;
    }
}
</style>
