<template>
    <section class="grid gap-8 text-content-wrapper">
        <h2>Шрифт. Google Fonts</h2>
        <p>
            Шрифт — це стиль тексту, який визначає його зовнішній вигляд,
            включаючи розмір, накреслення, товщину та інші параметри. У
            веб-дизайні часто використовують сервіси для підключення кастомних
            шрифтів, одним із популярних є <strong>Google Fonts</strong>.
        </p>

        <h3>Що таке Google Fonts?</h3>
        <p>
            <strong>Google Fonts</strong> — це безкоштовний сервіс від Google,
            який надає колекцію шрифтів для використання в веб-дизайні. Він
            дозволяє легко підключати кастомні шрифти до веб-сайтів і забезпечує
            їхню сумісність у різних браузерах.
        </p>

        <h3>Підключення шрифтів із Google Fonts:</h3>
        <p>
            Google Fonts можна підключити кількома способами: через тег
            <code>&lt;link&gt;</code> або за допомогою @import у CSS.
        </p>

        <h4>1. Підключення через тег <code>&lt;link&gt;</code>:</h4>
        <code class="code-block">
            &lt;head&gt;<br />
            &nbsp;&nbsp;&lt;link
            href=&quot;https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap&quot;
            rel=&quot;stylesheet&quot;&gt;<br />
            &lt;/head&gt;<br />
        </code>
        <p>Після цього можна використовувати шрифт у CSS:</p>
        <code class="code-block">
            body &#123; font-family: 'Roboto', sans-serif; &#125;<br />
        </code>

        <h4>2. Підключення за допомогою @import:</h4>
        <code class="code-block">
            &lt;style&gt;<br />
            &nbsp;&nbsp;@import
            url(&#39;https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap&#39;);<br />
            &nbsp;&nbsp;body &#123; font-family: 'Roboto', sans-serif; &#125;<br />
            &lt;/style&gt;<br />
        </code>

        <h3>Додаткові параметри:</h3>
        <p>Google Fonts дозволяє налаштувати шрифт перед підключенням:</p>
        <ul>
            <li>
                Вибір товщини шрифту (наприклад, 400 для стандартного тексту,
                700 для жирного).
            </li>
            <li>
                Опція <strong>display</strong> (наприклад,
                <code>display=swap</code>) для покращення відображення шрифту
                під час завантаження.
            </li>
        </ul>

        <h3>Приклад</h3>
        <code class="code-block">
            &lt;link
            href=&quot;https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&amp;display=swap&quot;
            rel=&quot;stylesheet&quot;&gt;<br />
            &lt;style&gt;<br />
            &nbsp;&nbsp;h2 &#123; font-family: 'Open Sans', sans-serif;
            font-weight: 600; &#125;<br />
            &nbsp;&nbsp;p &#123; font-family: 'Open Sans', sans-serif;
            font-weight: 300; &#125;<br />
            &lt;/style&gt;<br />
        </code>

        <div class="example-google-font">
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap"
                rel="stylesheet"
            />
            <h2>Шрифт OpenSans підключений через <b>google fonts</b></h2>
            <p>Шрифт OpenSans підключений через <i>google fonts</i></p>
            <p>Шрифт OpenSans підключений через <i>google fonts</i></p>
            <p>Шрифт OpenSans підключений через <i>google fonts</i></p>
            <p>Шрифт OpenSans підключений через <i>google fonts</i></p>
            <p>Шрифт OpenSans підключений через <i>google fonts</i></p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.example-google-font {
    font-family: 'Open Sans', sans-serif;

    h2 {
        font-weight: 600;
    }
}
</style>
