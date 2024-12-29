<template>
    <section class="grid gap-8 text-content-wrapper">
        <h2>CSS: Таблиці. Фон. Списки</h2>
        <p>
            CSS надає можливість стилізувати таблиці, фон і списки для
            покращення їхнього вигляду та зручності використання. Нижче наведено
            основні аспекти стилізації цих елементів.
        </p>

        <h3>1. Таблиці</h3>
        <p>
            За допомогою CSS можна змінювати вигляд таблиць, наприклад,
            коригувати бордери, відступи, кольори та вирівнювання тексту.
        </p>
        <code class="code-block">
            table &#123; border-collapse: collapse; width: 100%; &#125;<br />
            th, td &#123; border: 1px solid #ccc; padding: 10px; text-align:
            left; &#125;<br />
            th &#123; background-color: #f4f4f4; &#125;<br />
            tbody tr:nth-child(even) &#123; background-color: #f9f9f9; &#125;<br />
        </code>

        <h3>2. Фон</h3>
        <p>
            Стилі для фону дозволяють змінювати його колір, додавати зображення
            або градієнти. CSS також підтримує налаштування позиціонування та
            повторення фону.
        </p>
        <code class="code-block">
            body &#123; background-color: #e0f7fa; &#125;<br />
            div &#123; background-image: url('background.jpg'); background-size:
            cover; &#125;<br />
            header &#123; background: linear-gradient(to right, #ff7e5f,
            #feb47b); &#125;<br />
        </code>

        <h3>3. Списки</h3>
        <p>
            CSS дозволяє змінювати вигляд списків: тип маркерів, відступи,
            вирівнювання тощо.
        </p>
        <code class="code-block">
            ul &#123; list-style-type: square; margin: 20px; padding: 0;
            &#125;<br />
            ol &#123; list-style-type: upper-roman; margin: 20px; padding-left:
            30px; &#125;<br />
            li &#123; line-height: 1.8; &#125;<br />
        </code>

        <h3>Приклад використання:</h3>
        <p>Таблиця з фоном і стилізованими списками:</p>
        <code class="code-block">
            &lt;table&gt;<br />
            &nbsp;&nbsp;&lt;thead&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Назва&lt;/th&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Ціна&lt;/th&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br />
            &nbsp;&nbsp;&lt;/thead&gt;<br />
            &nbsp;&nbsp;&lt;tbody&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Товар 1&lt;/td&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;100 грн&lt;/td&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br />
            &nbsp;&nbsp;&lt;/tbody&gt;<br />
            &lt;/table&gt;<br />
            &lt;ul&gt;<br />
            &nbsp;&nbsp;&lt;li&gt;Елемент списку 1&lt;/li&gt;<br />
            &nbsp;&nbsp;&lt;li&gt;Елемент списку 2&lt;/li&gt;<br />
            &lt;/ul&gt;<br />
        </code>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
