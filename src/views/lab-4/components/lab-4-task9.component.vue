<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                Напиши скрипт, який змінює колір фону
                елемента &lt;body&gt; через інлайн-стиль по кліку
                на button.change-color і задає це значення кольору текстовим
                вмістом для span.color. <br />
                Для генерування випадкового кольору використовуй
                функцію getRandomHexColor().
                <code>
                    <pre>
                    function getRandomHexColor() {
                    return `#${Math.floor(Math.random() *
                    16777215)
                    .toString(16)
                    .padStart(6, 0)}`;
                }
                </pre
                    >
                </code>
                <br />
                Зверни увагу, що функція getRandomHexColor() повертає колір у
                hex-форматі, в той час як колір фону на &lt;body&gt; буде у
                форматі rgb. Це нормально й не потребує якихось правок.
            </p>
            <div class="flex gap-16">
                <code class="code-block">
                    <pre></pre>
                </code>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>
<style>
.code-block {
    ul {
        padding-inline: 16px;

        li {
            display: grid;
            grid-template-columns: 120px 1fr;
        }
    }
}
</style>
