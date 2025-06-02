<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                Напиши скрипт управління формою логіна. <br />
                1. Обробка відправлення форми form.login- form повинна
                відбуватися за подією submit. <br />
                2. Під час відправлення форми сторінка не повинна
                перезавантажуватися. <br />
                3. Якщо при сабміті у формі є незаповнені поля, виводь alert з
                попередженням про те, що &#39;All form fields must be filled
                in&#39;. Не додавай на інпути атрибут required, валідація має
                відбуватися саме через JS. <br />
                4. Якщо користувач заповнив усі поля і відправив форму, збери
                значення полів в об&#39;єкт з двома властивостями, де ключ — це
                ім&#39;я інпутів, а значення — відповідні значення цих інпутів,
                очищені від пробілів по краях. Для доступу до елементів форми
                використовуй властивість elements. <br />
                5. При сабміті форми виведи об&#39;єкт із введеними даними в
                консоль і очисти значення полів форми методом reset.
            </p>
            <div class="flex gap-16">
                <form action="/" class="login-form grid gap-16 max-w-300">
                    <h2>Login</h2>
                    <label
                        >Email <br />
                        <input type="email" name="email" autocomplete="no" />
                    </label>
                    <label
                        >Password <br />
                        <input
                            type="password"
                            name="password"
                            autocomplete="no"
                        />
                    </label>
                    <AppBtn type="submit" @click="submit($event)">
                        Log In
                    </AppBtn>
                </form>
                <div class="flex gap-16">
                    <code class="code-block">
                        <pre></pre>
                    </code>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/app-btn.component.vue'

function submit(event: SubmitEvent) {
    event.preventDefault()

    let form = document.querySelector('.login-form')

    if (!form) return

    const elements = form.elements as HTMLFormControlsCollection

    const emailInput = elements.namedItem('email') as HTMLInputElement
    const passwordInput = elements.namedItem('password') as HTMLInputElement

    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()

    if (!email || !password) {
        alert('All form fields must be filled in')
        return
    }

    const formData = {
        email,
        password,
    }

    console.log(formData)

    form.reset()
}
</script>
<style></style>
