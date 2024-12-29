<template>
    <div class="app-form-view">
        <div class="flex gap-16">
            <form
                class="checkout"
                @submit.prevent="handleSubmit"
                autocomplete="off"
            >
                <fieldset class="grid gap-16">
                    <legend>Форма для покупки товару</legend>

                    <div class="grid gap-8">
                        <label for="name">Ім'я покупця:</label>
                        <input
                            v-model="formData.name"
                            type="text"
                            id="name"
                            required
                            placeholder="Ваше ім'я"
                            autocomplete="off"
                        />
                    </div>

                    <div class="grid gap-8">
                        <label for="email">Електронна пошта:</label>
                        <input
                            v-model="formData.email"
                            type="email"
                            id="email"
                            required
                            placeholder="email@example.com"
                            autocomplete="off"
                        />
                    </div>

                    <div class="grid gap-8">
                        <label for="password">Пароль для акаунту:</label>
                        <input
                            v-model="formData.password"
                            type="password"
                            id="password"
                            required
                            autocomplete="new-password"
                        />
                    </div>

                    <div class="grid gap-8">
                        <div class="grid gap-8">
                            <p>Оберіть спосіб доставки: *</p>
                            <label class="flex gap-8">
                                <input
                                    v-model="formData.product"
                                    type="radio"
                                    value="Самовивіз"
                                    required
                                />
                                Самовивіз
                            </label>
                        </div>
                        <label class="flex gap-8">
                            <input
                                v-model="formData.product"
                                type="radio"
                                value="Укрпошта"
                            />
                            Укрпошта
                        </label>
                        <label class="flex gap-8">
                            <input
                                v-model="formData.product"
                                type="radio"
                                value="Нова пошта"
                            />

                            Нова пошта
                        </label>
                    </div>

                    <div class="grid gap-8">
                        <p>Додаткові послуги:</p>
                        <label class="flex gap-8">
                            <input
                                v-model="formData.services"
                                type="checkbox"
                                value="Подарункове упакування"
                            />
                            Подарункове упакування
                        </label>
                        <label class="flex gap-8">
                            <input
                                v-model="formData.services"
                                type="checkbox"
                                value="Страхування"
                            />
                            Страхування
                        </label>

                        <label class="flex gap-8">
                            <input
                                v-model="formData.services"
                                type="checkbox"
                                value="Експрес-доставка"
                            />

                            Експрес-доставка
                        </label>
                    </div>

                    <div class="grid gap-8">
                        <label for="quantity">Кількість:</label>
                        <select name="quantity" id="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div class="grid gap-8">
                        <label for="comments">Коментар:</label>
                        <textarea
                            v-model="formData.comments"
                            id="comments"
                            rows="4"
                            cols="40"
                            placeholder="Ваш коментар"
                        ></textarea>
                    </div>

                    <div class="flex gap-8">
                        <button type="submit">Підтвердити</button>
                        <button type="reset" @click="resetForm">
                            Очистити
                        </button>
                    </div>
                </fieldset>
            </form>
            <div class="form-data">
                <pre>
                    <code>
                        {{ formData }}
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
    name: '',
    email: '',
    password: '',
    product: '',
    services: [],
    quantity: 1,
    comments: '',
})

const handleSubmit = () => {
    console.log('Дані форми:', formData)
    alert('Форма успішно надіслана! Перевірте консоль для отриманих даних.')
}

const resetForm = () => {
    formData.name = ''
    formData.email = ''
    formData.password = ''
    formData.product = ''
    formData.services = []
    formData.quantity = 1
    formData.comments = ''
}
</script>

<style scoped>
fieldset {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
}

legend {
    font-weight: bold;
    font-size: 1.2em;
}

pre {
    background-color: #f9f9f9;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow-x: auto;
    white-space: pre-wrap;
}
</style>
