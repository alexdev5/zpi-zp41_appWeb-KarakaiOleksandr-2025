<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                Напишіть функцію getProductDetails, яка приймає ідентифікатор
                товару productId та дві колбек-функції successCallback та
                errorCallback.
            </p>
            <p>
                Функція getProductDetails повинна отримати деталі про вказаний
                товар та передати їх у successCallback.
            </p>
            <p>
                У випадку якщо товар не знайдено, викликається errorCallback і
                передається повідомлення про помилку.
            </p>
        </div>

        <div class="grid gap-16 function-checking-container">
            <div class="flex-column gap-16 function-checking-params">
                <label>
                    <span>Product ID</span>
                    <input type="number" v-model="productIdModel" />
                </label>
            </div>

            <code class="code-block">
                <b>Result:</b>
                <pre>
                    {{ result }}
                </pre>
            </code>

            <code class="code-block">
                <b>Products:</b>
                <pre>
                    {{ resultCollapsed }}
                </pre>

                <button class="btn-success" @click="isShowMore = !isShowMore">
                    {{ isShowMore ? 'Згорнути' : 'Розгорнути' }}
                </button>
            </code>
        </div>

        <code class="code-block">
            function getProductDetails(<br />
            &nbsp;&nbsp;productId: number,<br />
            &nbsp;&nbsp;successCallback: (product: Product) => Product,<br />
            &nbsp;&nbsp;errorCallback: (message: string) => string<br />
            ): string | Product &#123;<br />
            &nbsp;&nbsp;const product = products.find((product) => product.id
            === productId)<br />
            <br />
            &nbsp;&nbsp;return product<br />
            &nbsp;&nbsp;&nbsp;&nbsp;? successCallback(product)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;: errorCallback(`Product with ID
            &#36;&#123;productId&#125; not found.`)<br />
            &#125;<br />
        </code>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'

interface Product {
    id: number
    name: string
    price: number
    currency: string
}

const productIdModel = ref(1)
const result = ref<string | Product>('')

const isShowMore = ref(false)

const products: Product[] = [
    { id: 1, name: 'Apple Mac Book Pro', price: 2000, currency: '$' },
    { id: 2, name: 'Dell XPS 13', price: 1500, currency: '$' },
    { id: 3, name: 'iPhone 14 Pro', price: 1200, currency: '$' },
    { id: 4, name: 'Samsung Galaxy S23', price: 1000, currency: '$' },
    { id: 5, name: 'Microsoft Surface Pro 9', price: 1400, currency: '$' },
    { id: 6, name: 'Lenovo ThinkPad X1', price: 1300, currency: '$' },
    { id: 7, name: 'HP Spectre x360', price: 1600, currency: '$' },
    { id: 8, name: 'Google Pixel 7', price: 900, currency: '$' },
    { id: 9, name: 'Sony WH-1000XM5', price: 400, currency: '$' },
    { id: 10, name: 'Bose QuietComfort 45', price: 350, currency: '$' },
    { id: 11, name: 'Apple iPad Pro', price: 1100, currency: '$' },
    { id: 12, name: 'Samsung Galaxy Tab S8', price: 900, currency: '$' },
    { id: 13, name: 'Amazon Kindle Oasis', price: 300, currency: '$' },
    { id: 14, name: 'Apple Watch Series 8', price: 500, currency: '$' },
    { id: 15, name: 'Garmin Forerunner 955', price: 600, currency: '$' },
    { id: 16, name: 'Dyson Airwrap', price: 550, currency: '$' },
    { id: 17, name: 'GoPro Hero 11', price: 450, currency: '$' },
    { id: 18, name: 'DJI Mini 3 Pro', price: 800, currency: '$' },
    { id: 19, name: 'Razer Blade 15', price: 2200, currency: '$' },
    { id: 20, name: 'Asus ROG Zephyrus G14', price: 1900, currency: '$' },
]

const resultCollapsed = computed(() =>
    isShowMore.value ? products : products.slice(0, 5)
)

function getProductDetails(
    productId: number,
    successCallback: (product: Product) => Product,
    errorCallback: (message: string) => string
): string | Product {
    const product = products.find((product) => product.id === productId)

    return product
        ? successCallback(product)
        : errorCallback(`Product with ID ${productId} not found.`)
}

watch(
    () => productIdModel.value,
    (newValue) => {
        result.value = getProductDetails(
            Number(newValue),
            (product: Product) => {
                return product
            },
            (message: string) => {
                return message
            }
        )
    }
)
onMounted(() => {
    result.value = getProductDetails(
        productIdModel.value,
        (product: Product) => {
            return product
        },
        (message: string) => {
            return message
        }
    )
})
</script>
