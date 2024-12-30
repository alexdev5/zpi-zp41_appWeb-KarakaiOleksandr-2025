<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                Станція з продажу ремонтних дроїдів. Оголоси функцію
                <code
                    >makeTransaction(quantity, pricePerDroid,
                    customerCredits)</code
                >, яка складає та повертає повідомлення про купівлю ремонтних
                дроїдів.
            </p>
            <p>
                Вона оголошує три параметри, значення яких будуть задаватися під
                час її виклику:
            </p>
            <ul class="list">
                <li>quantity — кількість замовлених дроїдів</li>
                <li>pricePerDroid — ціна одного дроїда</li>
                <li>customerCredits — сума коштів на рахунку клієнта</li>
            </ul>
            <p>Доповни функцію таким чином:</p>
            <ul class="list">
                <li>
                    Оголоси змінну для зберігання загальної суми замовлення
                    (загальна вартість усіх замовлених дроїдів) і задай їй вираз
                    розрахунку цієї суми.
                </li>
                <li>Додай перевірку, чи зможе клієнт оплатити замовлення:</li>
                <li>
                    якщо сума до сплати перевищує кількість кредитів на рахунку
                    клієнта, функція має повертати рядок
                    <code>&quot;Insufficient funds!&quot;</code>
                </li>
                <li>
                    в іншому випадку функція має повертати рядок
                    <code
                        >&quot;You ordered &lt;quantity&gt; droids worth
                        &lt;totalPrice&gt; credits!&quot;</code
                    >, де <code>&lt;quantity&gt;</code> це кількість замовлених
                    дроїдів, а <code>&lt;totalPrice&gt;</code> це їх загальна
                    вартість.
                </li>
            </ul>
        </div>

        <div class="grid gap-16 function-checking-container">
            <div class="flex-column gap-16 function-checking-params">
                <label>
                    <span>quantity</span>
                    <input type="number" v-model="quantity" />
                </label>
                <label>
                    <span>Price Per Droid</span>
                    <input type="number" v-model="pricePerDroid" />
                </label>
                <label>
                    <span>Customer Credits</span>
                    <input type="number" v-model="customerCredits" />
                </label>
            </div>

            <code class="code-block">
                <b>Result:</b>
                {{ makeTransaction(quantity, pricePerDroid, customerCredits) }}
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

const quantity = ref(10)
const pricePerDroid = ref(100)
const customerCredits = ref(20)

function makeTransaction(
    quantity: number,
    pricePerDroid: number,
    customerCredits: number
): string {
    // Розраховуємо загальну суму замовлення
    const totalPrice = quantity * pricePerDroid

    // Перевіряємо, чи вистачає коштів у клієнта
    if (totalPrice > customerCredits) {
        return 'Insufficient funds!'
    } else {
        // Повертаємо повідомлення про успішне замовлення
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`
    }
}
</script>
