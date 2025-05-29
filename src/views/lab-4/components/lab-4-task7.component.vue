<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                Напиши скрипт, який: <br />
                1. Порахує і виведе в консоль кількість категорій в
                ul#categories, тобто елементів li.item. <br />
                2. Для кожного элемента li.item у списку ul#categories, знайде і
                виведе в консоль текст заголовку елемента (тегу &lt;h2&gt;) і
                кількість елементів в категорії (усіх &lt;li&gt;, вкладених в
                нього).<br />
                Для виконання цього завдання потрібно використати метод
                forEach() і властивості навігації по DOM. В результаті, в
                консолі будуть виведені наступні повідомлення.
            </p>
            <div class="flex gap-16">
                <ul id="categories" ref="categories">
                    <li class="item">
                        <h4>Animals</h4>
                        <ul>
                            <li>Cat</li>
                            <li>Hamster</li>
                            <li>Horse</li>
                            <li>Parrot</li>
                        </ul>
                    </li>
                    <li class="item">
                        <h4>Products</h4>
                        <ul>
                            <li>Bread</li>
                            <li>Prasley</li>
                            <li>Cheese</li>
                        </ul>
                    </li>
                    <li class="item">
                        <h4>Technologies</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                    </li>
                </ul>
                <code class="code-block">
                    <ul>
                        <li v-for="item in categoryList">
                            <b>{{ item.title }}:</b
                            ><span>{{ item.number }}</span>
                        </li>
                    </ul>
                </code>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface Record {
    title: string
    number: number | string
}

const categories = ref()
const categoryList = ref<Record[]>([])

onMounted(() => {
    const listItems = document.querySelectorAll('#categories li.item')
    const result: Record[] = []

    listItems.forEach((item) => {
        const header = item.querySelector('h4')
        const title = header?.textContent?.trim()
        const list = item.querySelectorAll('ul li')

        console.log(title, list.length)

        result.push({
            title: title ?? '',
            number: list.length,
        })
    })

    categoryList.value = result
})
</script>
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
