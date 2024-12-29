<template>
    <section class="grid gap-8 text-content-wrapper">
        <h2>Що таке селектори?</h2>
        <p>
            <strong>Селектори</strong> в CSS — це інструменти для вибору
            HTML-елементів, до яких застосовуються стилі. Вони дозволяють
            задавати оформлення для елементів сторінки на основі їхнього типу,
            класів, ідентифікаторів, атрибутів або їхнього положення у структурі
            документа.
        </p>

        <h3>Основні види селекторів:</h3>

        <h4>1. Прості селектори:</h4>
        <p>Вибирають елементи за назвою тегу, класом або ідентифікатором.</p>

        <code class="code-block">
            h1 &#123; color: red; &#125; /* Всі &lt;h1&gt; */ .class &#123;
            color: blue; &#125; /* Елементи з класом "class" */ #id &#123;
            color: green; &#125; /* Елемент із ID "id" */
        </code>

        <h4>2. Комбінатори:</h4>
        <p>Визначають залежність між елементами.</p>

        <code class="code-block">
            div p &#123; color: gray; &#125; /* Усі &lt;p&gt; всередині
            &lt;div&gt; */
        </code>

        <h4>3. Атрибути:</h4>
        <p>Вибирають елементи за значенням атрибутів.</p>

        <code class="code-block">
            input[type="text"] &#123; border: 1px solid black; &#125; /* Поля
            вводу тексту */
        </code>

        <h4>4. Псевдокласи:</h4>
        <p>Вибирають елементи за їхнім станом.</p>

        <code class="code-block">
            a:hover &#123; text-decoration: underline; &#125; /* Посилання при
            наведенні */
        </code>

        <h4>5. Псевдоелементи:</h4>
        <p>Вибирають частини елементів.</p>

        <code class="code-block">
            p::first-line &#123; font-weight: bold; &#125; /* Перша строка
            абзацу */
        </code>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
