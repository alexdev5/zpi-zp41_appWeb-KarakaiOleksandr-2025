<template>
    <div class="app-form-view">
        <div class="grid gap-16 app-form-view-container">
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
                        <select
                            name="quantity"
                            id="quantity"
                            v-model="formData.quantity"
                        >
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
                        <button class="btn-success" type="submit">
                            Підтвердити
                        </button>
                        <button type="reset" @click="resetForm">
                            Очистити
                        </button>
                    </div>
                </fieldset>
            </form>
            <div class="form-data">
                <h4 class="mb-16">Дані форми</h4>
                <code class="code-block" style="width: 100%">
                    <pre>
                        {{ formData }}
                    </pre>
                </code>
            </div>
            <div class="html-form grid gap-16">
                <h4>HTML код форми</h4>
                <code class="code-block">
                    &lt;form<br />
                    class=&quot;checkout&quot;<br />
                    @submit.prevent=&quot;handleSubmit&quot;<br />
                    autocomplete=&quot;off&quot;<br />
                    &gt;<br />
                    &nbsp;&nbsp;&lt;fieldset class=&quot;grid
                    gap-16&quot;&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;legend&gt;Форма для покупки
                    товару&lt;/legend&gt;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;grid
                    gap-8&quot;&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label
                    for=&quot;name&quot;&gt;Ім&#39;я покупця:&lt;/label&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model=&quot;formData.name&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;text&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id=&quot;name&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder=&quot;Ваше
                    ім&#39;я&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autocomplete=&quot;off&quot;<br />
                    /&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;grid
                    gap-8&quot;&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label
                    for=&quot;email&quot;&gt;Електронна пошта:&lt;/label&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model=&quot;formData.email&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;email&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id=&quot;email&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder=&quot;email@example.com&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autocomplete=&quot;off&quot;<br />
                    /&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;grid
                    gap-8&quot;&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label
                    for=&quot;password&quot;&gt;Пароль для
                    акаунту:&lt;/label&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model=&quot;formData.password&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;password&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id=&quot;password&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autocomplete=&quot;new-password&quot;<br />
                    /&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;grid
                    gap-8&quot;&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Оберіть спосіб
                    доставки: *&lt;/p&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label
                    class=&quot;flex gap-8&quot;&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model=&quot;formData.product&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;radio&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value=&quot;Самовивіз&quot;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required<br />
                    /&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Самовивіз<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;flex
                    gap-8&quot;&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                    type=&quot;submit&quot;&gt;Підтвердити&lt;/button&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                    type=&quot;reset&quot;
                    @click=&quot;resetForm&quot;&gt;Очистити&lt;/button&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                    &nbsp;&nbsp;&lt;/fieldset&gt;<br />
                    &lt;/form&gt;
                </code>
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
.app-form-view-container {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
}

fieldset {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
}

legend {
    font-weight: bold;
    font-size: 1.2em;
}
</style>
