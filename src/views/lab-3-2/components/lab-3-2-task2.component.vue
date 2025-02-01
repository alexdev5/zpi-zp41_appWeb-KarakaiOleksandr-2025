<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                <br />З об&#39;єкту concerts отримати масив, який буде містити
                лише імена міст. <br />
                З масиву потрібно прибрати міста, в яких концерт уже пройшов і
                відсортувати їх у хронологічному порядку. <br />Результат
                вивести у консоль. <br />Очікуваний результат
                [&quot;Одеса&quot;, &quot;Умань&quot;, &quot;Харків&quot;]
                <br />Застосувати стрілочні функції
            </p>
            <pre>
                const concerts = {
                    Київ: new Date(&quot;2020-04-01&quot;),
                    Вінниця: new Date(&quot;2020-04-21&quot;),
                    Одеса: new Date(&quot;2025-03-15&quot;),
                    Хмельницький: new Date(&quot;2020-04-18&quot;),
                    Харків: new Date(&quot;2025-07-10&quot;),
                }
            </pre>
        </div>

        <div class="grid gap-16 function-checking-container">
            <code class="code-block">
                <b>Result:</b>
                <pre>
                    {{ result }}
                </pre>
            </code>
        </div>
    </div>
</template>

<script lang="ts" setup>
const concerts: { [city: string]: Date } = {
    Київ: new Date('2020-04-01'),
    Умань: new Date('2025-07-02'),
    Вінниця: new Date('2020-04-21'),
    Одеса: new Date('2025-03-15'),
    Хмельницький: new Date('2020-04-18'),
    Харків: new Date('2025-07-10'),
}

const now = new Date('2025-01-01')

const result = Object.entries(concerts)
    .filter(([_, date]) => date > now)
    .sort(([, dateA], [, dateB]) => dateA.getTime() - dateB.getTime())
    .map(([city]) => city)
</script>
