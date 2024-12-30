<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                Напиши функцію під назвою <code>makeArray</code>, яка приймає
                три параметри:
                <code>firstArray</code> (масив),<code>secondArray</code>(масив)
                і <code>maxLength</code>(число). Функція повинна створювати
                новий масив, який містить усі елементи з
                <code>firstArray</code>, а потім усі елементи з
                <code>secondArray</code>.
            </p>
            <ul class="list">
                <li>
                    Якщо кількість елементів у новому масиві перевищує
                    <code>maxLength</code>, функція повинна повернути копію
                    масиву з довжиною <code>maxLength</code> елементів.
                </li>
                <li>
                    В іншому випадку функція повинна повернути весь новий масив.
                </li>
            </ul>
        </div>

        <div class="grid gap-16 function-checking-container">
            <div class="flex-column gap-16 function-checking-params">
                <label>
                    <span>MaxLength</span>
                    <input type="number" v-model="maxLength" />
                </label>
                <code class="code-block">
                    <b>firstArray:</b>
                    {{ firstArray }}
                </code>
                <code class="code-block">
                    <b>secondArray:</b>
                    {{ secondArray }}
                </code>
            </div>

            <code class="code-block">
                <b>Result:</b>
                {{ makeArray(firstArray, secondArray, maxLength) }}
            </code>

            <code class="code-block">
                function makeTransaction(<br />
                &nbsp;&nbsp;quantity: number,<br />
                &nbsp;&nbsp;pricePerDroid: number,<br />
                &nbsp;&nbsp;customerCredits: number<br />
                ): string &#123;<br />
                &nbsp;&nbsp;// Розраховуємо загальну суму замовлення<br />
                &nbsp;&nbsp;const totalPrice = quantity * pricePerDroid;<br />
                <br />
                &nbsp;&nbsp;// Перевіряємо, чи вистачає коштів у клієнта<br />
                &nbsp;&nbsp;if (totalPrice > customerCredits) &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;return 'Insufficient funds!';<br />
                &nbsp;&nbsp;&#125; else &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;// Повертаємо повідомлення про успішне
                замовлення<br />
                &nbsp;&nbsp;&nbsp;&nbsp;return `You ordered
                &#36;&#123;quantity&#125; droids worth
                &#36;&#123;totalPrice&#125; credits!`;<br />
                &nbsp;&nbsp;&#125;<br />
                &#125;<br />
            </code>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const firstArray = ref([1, 2, 3, 4, 45, 23, 56, 75, 1, 4])
const secondArray = ref([9, 5, 1, 8, 0, 4, 3, 7, 5])
const maxLength = ref(10)

function makeArray(
    firstArray: any[],
    secondArray: any[],
    maxLength: number
): any[] {
    const combinedArray = [...firstArray, ...secondArray]

    // Перевіряємо довжину нового масиву
    if (combinedArray.length > maxLength) {
        // Повертаємо обрізаний масив до maxLength
        return combinedArray.slice(0, maxLength)
    }

    return combinedArray
}
</script>

<style lang="scss">
.function-checking-container-task-3 {
    grid-template-columns: 1fr 1fr;
}
</style>
