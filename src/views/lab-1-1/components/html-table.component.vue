<template>
    <table>
        <caption>
            Каталог товарів
        </caption>
        <thead>
            <tr>
                <th scope="col">Назва товару</th>
                <th scope="col">Категорія</th>
                <th scope="col">Ціна (грн)</th>
                <th scope="col">Наявність</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Смартфон Samsung Galaxy S23</td>
                <td>Смартфони</td>
                <td>34999</td>
                <td>Є в наявності</td>
            </tr>
            <tr>
                <td>Ноутбук MacBook Pro 16"</td>
                <td>Ноутбуки</td>
                <td>79999</td>
                <td>Немає в наявності</td>
            </tr>
            <tr>
                <td>Навушники Sony WH-1000XM5</td>
                <td>Аксесуари</td>
                <td>12999</td>
                <td>Є в наявності</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Загальна кількість товарів</td>
                <td>3</td>
            </tr>
        </tfoot>
    </table>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
