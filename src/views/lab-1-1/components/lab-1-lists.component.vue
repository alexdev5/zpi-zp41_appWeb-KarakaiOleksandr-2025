<template>
    <div class="grid gap-8">
        <!-- Ненумерований список -->
        <h3>Ненумерований список:</h3>
        <ul class="list">
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
        </ul>
    </div>
    <div class="grid gap-8">
        <h3>Нумерований список:</h3>
        <ol class="list">
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
        </ol>
    </div>

    <ol>
        <li>
            <p>
                <strong><code>&lt;ul&gt;</code> (unordered list)</strong>:
            </p>
            <ul>
                <li>Використовується для ненумерованих списків.</li>
                <li>Елементи списку позначаються крапками (булітами).</li>
                <li>
                    Тег <code>&lt;li&gt;</code> (list item) визначає кожен
                    елемент списку.
                </li>
            </ul>
        </li>
        <li>
            <p>
                <strong><code>&lt;ol&gt;</code> (ordered list)</strong>:
            </p>
            <ul>
                <li>Використовується для нумерованих списків.</li>
                <li>Елементи списку автоматично нумеруються.</li>
                <li>
                    Тег <code>&lt;li&gt;</code> також використовується для
                    кожного пункту.
                </li>
            </ul>
        </li>
    </ol>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
