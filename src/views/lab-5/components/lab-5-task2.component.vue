<template>
    <div class="grid gap-16">
        <form
            class="grid gap-16 max-w-500 feedback-form"
            autocomplete="off"
            @input="onInputForm"
            @submit="onSubmit"
        >
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    autofocus
                    class="form-control"
                />
            </label>
            <label>
                Message
                <textarea name="message" rows="8"></textarea>
            </label>
            <AppBtn type="submit" size="md" variant="primary">Submit</AppBtn>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import AppBtn from '@/components/ui/app-btn.component.vue'

const STORAGE_KEY = 'feedback-form-state'

const formData = {
    email: '',
    message: '',
}

// Подія введення (input)
function onInputForm(evt: Event) {
    const target = evt.target as HTMLInputElement | HTMLTextAreaElement
    const name = target.name
    const value = target.value.trim()

    if (name === 'email' || name === 'message') {
        formData[name] = value
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    }
}

// Подія сабміту форми
function onSubmit(evt: Event) {
    evt.preventDefault()

    if (!formData.email || !formData.message) {
        alert('Fill please all fields')
        return
    }

    console.log({ ...formData })

    localStorage.removeItem(STORAGE_KEY)

    formData.email = ''
    formData.message = ''

    const form = evt.target as HTMLFormElement
    form.reset()
}

// Відновлення даних із localStorage при завантаженні
onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
        try {
            const parsed = JSON.parse(saved)
            formData.email = parsed.email?.trim() || ''
            formData.message = parsed.message?.trim() || ''

            const form = document.querySelector(
                '.feedback-form'
            ) as HTMLFormElement
            if (form) {
                const emailInput = form.elements.namedItem(
                    'email'
                ) as HTMLInputElement
                const messageInput = form.elements.namedItem(
                    'message'
                ) as HTMLTextAreaElement
                emailInput.value = formData.email
                messageInput.value = formData.message
            }
        } catch (e) {
            console.warn('Invalid saved data in localStorage')
        }
    }
})
</script>
