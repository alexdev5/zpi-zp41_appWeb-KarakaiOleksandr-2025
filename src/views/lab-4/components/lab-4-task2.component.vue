<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                <br />Створити html-розміту, яка складається з наступних
                елементів : текст, кнопка, два інпута (поля введення ). <br />
                Після натискання кнопки &quot;SWAP ME&quot; здійснюється обмін
                вмістом між двома інпутами.
            </p>
            <div class="flex gap-16">
                <AppBtn @click="swapText()">SWAP ME</AppBtn>
                <input type="text" v-model="inputModel1" />
                <input type="text" v-model="inputModel2" />
            </div>
            <pre></pre>
        </div>

        <div class="flex gap-16">
            <code class="code-block">
                <b>HTML code:</b>
                <pre>
&lt;div class="flex gap-16"&gt;
    &lt;AppBtn&gt;SWAP ME&lt;/AppBtn&gt;
    &lt;input type="text" v-model="inputModel1" /&gt;
    &lt;input type="text" v-model="inputModel2" /&gt;
&lt;/div&gt;
                </pre>
            </code>
            <code class="code-block">
                <b>function:</b>
                <pre>
const inputModel1 = ref('')
const inputModel2 = ref('')

function swapText() {
    const input1 = inputModel1.value
    const input2 = inputModel2.value

    inputModel1.value = input2
    inputModel2.value = input1
}
                </pre>
            </code>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/app-btn.component.vue'
import { ref } from 'vue'

const inputModel1 = ref('')
const inputModel2 = ref('')

function swapText() {
    const input1 = inputModel1.value
    const input2 = inputModel2.value

    inputModel1.value = input2
    inputModel2.value = input1
}
</script>
