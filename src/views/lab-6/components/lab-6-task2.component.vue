<template>
    <div class="grid gap-16 lab-6-2">
        <form class="form grid gap-16" @submit.prevent="handleSubmit">
            <label>
                Delay (ms)
                <input
                    type="number"
                    name="delay"
                    required
                    v-model.number="delay"
                />
            </label>
            <fieldset>
                <legend>State</legend>
                <label>
                    <input
                        type="radio"
                        name="state"
                        value="fulfilled"
                        required
                        v-model="state"
                    />
                    Fulfilled
                </label>
                <label>
                    <input
                        type="radio"
                        name="state"
                        value="rejected"
                        required
                        v-model="state"
                    />
                    Rejected
                </label>
            </fieldset>
            <AppBtn type="submit" size="md" variant="primary"
                >Create notification
            </AppBtn>
        </form>
        <code class="code-block">
            <pre>
function createPromise(
    delay: number,
    state: 'fulfilled' | 'rejected'
): Promise&lt;number&gt; {
    return new Promise((resolve, reject) =&gt; {
        setTimeout(() =&gt; {
            state === 'fulfilled' ? resolve(delay) : reject(delay)
        }, delay)
    })
}

function handleSubmit() {
    createPromise(delay.value, state.value)
        .then((ms) =&gt; {
            iziToast.success({
                title: '✅ Success',
                message: `Fulfilled promise in ${ms}ms`,
                position: 'topRight',
            })
        })
        .catch((ms) =&gt; {
            iziToast.error({
                title: '❌ Error',
                message: `Rejected promise in ${ms}ms`,
                position: 'topRight',
            })
        })
}
            </pre>
        </code>
    </div>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/app-btn.component.vue'

import { ref } from 'vue'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

const delay = ref<number>(0)
const state = ref<'fulfilled' | 'rejected' | ''>('')

function createPromise(
    delay: number,
    state: 'fulfilled' | 'rejected'
): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            state === 'fulfilled' ? resolve(delay) : reject(delay)
        }, delay)
    })
}

function handleSubmit() {
    createPromise(delay.value, state.value)
        .then((ms) => {
            iziToast.success({
                title: '✅ Success',
                message: `Fulfilled promise in ${ms}ms`,
                position: 'topRight',
            })
        })
        .catch((ms) => {
            iziToast.error({
                title: '❌ Error',
                message: `Rejected promise in ${ms}ms`,
                position: 'topRight',
            })
        })
}
</script>

<style lang="scss">
.lab-6-2 {
    .form {
        max-width: 400px;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
}
</style>
