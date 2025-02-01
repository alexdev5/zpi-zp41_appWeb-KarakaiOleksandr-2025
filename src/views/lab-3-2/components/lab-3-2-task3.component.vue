<template>
    <div class="grid gap-16">
        <div class="grid gap-8">
            <p>
                Напишіть функцію, яка приймає массив об&#39;єктів і повертає
                новий массивоб&#39;єктів,у якому є знижка на 30 % на всі
                медикаменти ціна, яких перевищує 300 грн у масиві. Надайте ід
                для кожного медикамента
            </p>
            <pre>
                const medicines = [
                    { name: &quot;Noshpa&quot;, price: 170 },
                    { name: &quot;Analgin&quot;, price: 55 },
                    { name: &quot;Quanil&quot;, price: 310 },
                    { name: &quot;Alphacholine&quot;, price: 390 },
                ];
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
const medicines = [
    { name: 'Noshpa', price: 170 },
    { name: 'Analgin', price: 55 },
    { name: 'Quanil', price: 310 },
    { name: 'Alphacholine', price: 390 },
]

const applyDiscountAndAssignId = (
    meds: { name: string; price: number }[]
): { id: number; name: string; price: number }[] =>
    meds.map((med, index) => ({
        id: index + 1,
        name: med.name,
        price: med.price > 300 ? med.price * 0.7 : med.price,
    }))

const result = applyDiscountAndAssignId(medicines)
</script>
