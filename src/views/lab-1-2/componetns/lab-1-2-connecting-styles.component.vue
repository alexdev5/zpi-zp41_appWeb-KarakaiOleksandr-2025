<template>
    <section class="grid gap-8 text-content-wrapper">
        <h2>Способи підключення стилів</h2>
        <p>
            У CSS існує три основні способи підключення стилів:
            <strong>inline (вбудовані стилі)</strong>,
            <strong>internal (внутрішні стилі)</strong> і
            <strong>external (зовнішні стилі)</strong>. Кожен із цих способів
            має свої переваги і недоліки.
        </p>

        <h3>1. Inline (Вбудовані стилі):</h3>
        <p>
            Стилі застосовуються безпосередньо до конкретного елемента за
            допомогою атрибута <code>style</code>.
        </p>
        <code class="code-block">
            &lt;p style=&quot;color: blue; font-size: 18px;&quot;&gt;Це абзац із
            вбудованими стилями.&lt;/p&gt;<br />
        </code>
        <p>
            <strong>Переваги:</strong> Простота та швидкість застосування до
            окремого елемента.
        </p>
        <p>
            <strong>Недоліки:</strong> Нечитабельність коду при великій
            кількості стилів.
        </p>

        <h3>2. Internal (Внутрішні стилі):</h3>
        <p>
            Стилі визначаються у блоці <code>&lt;style&gt;</code> в секції
            <code>&lt;head&gt;</code> документа.
        </p>
        <code class="code-block">
            &lt;head&gt;<br />
            &nbsp;&nbsp;&lt;style&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;body &#123; font-family: Arial, sans-serif;
            &#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;h1 &#123; color: green; text-align: center;
            &#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;p &#123; color: gray; &#125;<br />
            &nbsp;&nbsp;&lt;/style&gt;<br />
            &lt;/head&gt;<br />
        </code>
        <p><strong>Переваги:</strong> Зручно для стилізації однієї сторінки.</p>
        <p>
            <strong>Недоліки:</strong> Неможливість повторного використання
            стилів на інших сторінках.
        </p>

        <h3>3. External (Зовнішні стилі):</h3>
        <p>
            Стилі зберігаються в окремому CSS-файлі, який підключається до
            HTML-документа за допомогою тега <code>&lt;link&gt;</code>.
        </p>
        <code class="code-block">
            /* styles.css */<br />
            body &#123; background-color: #f0f0f0; font-family: 'Roboto',
            sans-serif; &#125;<br />
            h1 &#123; color: #333; text-align: center; &#125;<br />
            p &#123; color: #555; line-height: 1.6; &#125;<br />
            &lt;link rel=&quot;stylesheet&quot;
            href=&quot;styles.css&quot;&gt;<br />
        </code>
        <p>
            <strong>Переваги:</strong> Легко повторно використовувати стилі на
            багатьох сторінках.
        </p>
        <p>
            <strong>Недоліки:</strong> Потребує додаткового HTTP-запиту для
            завантаження CSS-файлу.
        </p>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
