<template>
    <div class="grid gap-16">
        <form
            class="grid gap-16 max-w-500 feedback-form"
            autocomplete="off"
            @input="onInputForm($event)"
            @submit="onSubmit($event)"
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
            <AppBtn type="submit" @click="onClick($event)">Submit</AppBtn>
        </form>
    </div>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/app-btn.component.vue'

function onClick(evt: Event) {
    evt.preventDefault()
}

function onInputForm(evt: Event) {
    console.log(evt)
}

function onSubmit(evt: Event) {
    evt.preventDefault()
}
</script>
<style lang="scss"></style>
