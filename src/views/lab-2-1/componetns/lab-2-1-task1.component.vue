<template>
    <section class="grid gap-8">
        <h3>Резиновий (Fluid Layout)</h3>
        <p>
            Використовуються відсотки для ширини елементів. Такий макет
            адаптується до розміру вікна браузера.
        </p>
        <h4>Основний шаблон додатку</h4>
        <code class="code-block">
            &lt;div class=&quot;app-wrapper&quot;&gt;<br />
            &nbsp;&nbsp;&lt;AppHeader /&gt;<br />
            <br />
            &nbsp;&nbsp;&lt;div class=&quot;app-body&quot;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;AsideNavigation /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;PageContent /&gt;<br />
            &nbsp;&nbsp;&lt;/div&gt;<br />
            <br />
            &nbsp;&nbsp;&lt;AppFooter /&gt;<br />
            &lt;/div&gt;
        </code>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
