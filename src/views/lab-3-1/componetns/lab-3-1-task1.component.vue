<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                Оголоси функцію <code>getShippingMessage</code>, яка очікує три
                параметри, значення яких будуть задаватися під час її виклику:
            </p>
            <ul class="list">
                <li>
                    country — перший параметр, рядок, що містить країну доставки
                </li>
                <li>
                    price — другий параметр, число, що містить загальну вартість
                    товару
                </li>
                <li>
                    deliveryFee — третій параметр, число, що містить вартість
                    доставки товару
                </li>
            </ul>
            <p>
                Напиши код функції так, щоб вона повертала рядок з повідомленням
                про доставку товару в країну користувача: &quot;Shipping to
                &lt;country&gt; will cost &lt;totalPrice&gt; credits&quot;, де:
            </p>
            <ul class="list">
                <li>&lt;country&gt; — це країни доставки</li>
                <li>
                    &lt;totalPrice&gt; — це загальна вартість замовлення, що
                    включає вартість товару і його доставки
                </li>
            </ul>
        </div>

        <div class="grid gap-16 function-checking-container">
            <div class="flex-column gap-16 function-checking-params">
                <label>
                    <span>Country</span>
                    <input type="text" v-model="country" />
                </label>
                <label>
                    <span>Price</span>
                    <input type="number" v-model="price" />
                </label>
                <label>
                    <span>Delivery Fee</span>
                    <input type="number" v-model="deliveryFee" />
                </label>
            </div>

            <code class="code-block">
                <b>Result:</b>
                {{ getShippingMessage(country, price, deliveryFee) }}
            </code>

            <code class="code-block">
                function getShippingMessage(<br />
                &nbsp;&nbsp;country: string,<br />
                &nbsp;&nbsp;price: number,<br />
                &nbsp;&nbsp;deliveryFee: number<br />
                ): string &#123;<br />
                &nbsp;&nbsp;const totalPrice = price + deliveryFee;<br />
                &nbsp;&nbsp;return `Shipping to &#36;&#123;country&#125; will
                cost &#36;&#123;totalPrice&#125; credits`;<br />
                &#125;<br />
            </code>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const country = ref('Ukraine')
const price = ref(100)
const deliveryFee = ref(20)

function getShippingMessage(
    country: string,
    price: number,
    deliveryFee: number
): string {
    const totalPrice = price + deliveryFee
    return `Shipping to ${country} will cost ${totalPrice} credits`
}
</script>
