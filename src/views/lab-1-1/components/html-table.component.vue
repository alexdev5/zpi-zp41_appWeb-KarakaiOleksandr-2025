<template>
    <div class="grid gap-16">
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
                    <td>Samsung Galaxy S23</td>
                    <td>Смартфони</td>
                    <td>34999</td>
                    <td>Є в наявності</td>
                </tr>
                <tr>
                    <td>MacBook Pro 16"</td>
                    <td>Ноутбуки</td>
                    <td>79999</td>
                    <td>Немає в наявності</td>
                </tr>
                <tr>
                    <td>Sony WH-1000XM5</td>
                    <td>Навушники</td>
                    <td>12999</td>
                    <td>Є в наявності</td>
                </tr>
                <tr>
                    <td>Samsung Galaxy S23</td>
                    <td>Смартфони</td>
                    <td>34999</td>
                    <td>Є в наявності</td>
                </tr>
                <tr>
                    <td>MacBook Pro 16"</td>
                    <td>Ноутбуки</td>
                    <td>79999</td>
                    <td>Немає в наявності</td>
                </tr>
                <tr>
                    <td>Sony WH-1000XM5</td>
                    <td>Навушники</td>
                    <td>12999</td>
                    <td>Є в наявності</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">Загальна кількість товарів</td>
                    <td>6</td>
                </tr>
            </tfoot>
        </table>

        <div>
            <h3>HTML-код таблиці</h3>
            <hr />
            <div class="table-html">
                <code class="code-block">
                    &lt;table&gt;<br />
                    &nbsp;&nbsp;&lt;caption&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Каталог товарів<br />
                    &nbsp;&nbsp;&lt;/caption&gt;<br />
                    &nbsp;&nbsp;&lt;thead&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th
                    scope=&quot;col&quot;&gt;Назва товару&lt;/th&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th
                    scope=&quot;col&quot;&gt;Категорія&lt;/th&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th
                    scope=&quot;col&quot;&gt;Ціна (грн)&lt;/th&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th
                    scope=&quot;col&quot;&gt;Наявність&lt;/th&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br />
                    &nbsp;&nbsp;&lt;/thead&gt;<br />
                    &nbsp;&nbsp;&lt;tbody&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Samsung Galaxy
                    S23&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Смартфони&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;34999&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Є в
                    наявності&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;MacBook Pro
                    16&quot;&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Ноутбуки&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;79999&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Немає в
                    наявності&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Sony
                    WH-1000XM5&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Навушники&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;12999&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Є в
                    наявності&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br />
                    &nbsp;&nbsp;&lt;/tbody&gt;<br />
                    &nbsp;&nbsp;&lt;tfoot&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td
                    colspan=&quot;3&quot;&gt;Загальна кількість
                    товарів&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;6&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br />
                    &nbsp;&nbsp;&lt;/tfoot&gt;<br />
                    &lt;/table&gt;
                </code>
            </div>
        </div>

        <div>
            <h3>Теги</h3>
            <hr />
            <ol>
                <li>
                    <p>
                        <strong><code>&lt;table&gt;</code></strong>
                    </p>
                    <ul>
                        <li>Основний контейнер для створення таблиці.</li>
                        <li>
                            Усі рядки, стовпці та дані таблиці повинні бути
                            вкладені в цей тег.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>&lt;caption&gt;</code></strong>
                    </p>
                    <ul>
                        <li>Додає заголовок таблиці.</li>
                        <li>
                            Розташовується безпосередньо після відкриття тега
                            <code>&lt;table&gt;</code>.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>&lt;thead&gt;</code></strong>
                    </p>
                    <ul>
                        <li>
                            Групує заголовки таблиці (рядки
                            <code>&lt;tr&gt;</code> з клітинками
                            <code>&lt;th&gt;</code>).
                        </li>
                        <li>
                            Робить таблицю семантично правильною та доступною
                            для скрінрідерів.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>&lt;tbody&gt;</code></strong>
                    </p>
                    <ul>
                        <li>
                            Групує основний вміст таблиці (рядки
                            <code>&lt;tr&gt;</code> з клітинками
                            <code>&lt;td&gt;</code>).
                        </li>
                        <li>
                            Допомагає структурувати таблицю та підвищує її
                            зручність для читання.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>&lt;tfoot&gt;</code></strong>
                    </p>
                    <ul>
                        <li>
                            Групує нижній колонтитул таблиці, наприклад,
                            підсумкові дані.
                        </li>
                        <li>
                            Семантично розташовується після
                            <code>&lt;thead&gt;</code>, але візуально внизу
                            таблиці.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>&lt;tr&gt;</code></strong>
                    </p>
                    <ul>
                        <li>
                            Визначає рядок таблиці. Використовується як у
                            <code>&lt;thead&gt;</code>,
                            <code>&lt;tbody&gt;</code>, так і в
                            <code>&lt;tfoot&gt;</code>.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>&lt;th&gt;</code></strong>
                    </p>
                    <ul>
                        <li>Визначає клітинку-заголовок у таблиці.</li>
                        <li>
                            За замовчуванням текст у
                            <code>&lt;th&gt;</code> вирівнюється по центру та
                            виділяється жирним шрифтом.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>&lt;td&gt;</code></strong>
                    </p>
                    <ul>
                        <li>
                            Визначає звичайну клітинку таблиці, яка містить
                            дані.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
        <div>
            <h3>Атрибути</h3>
            <hr />
            <ol>
                <li>
                    <p>
                        <strong><code>scope</code></strong>
                    </p>
                    <ul>
                        <li>
                            Визначає, до чого відноситься заголовок у клітинці
                            <code>&lt;th&gt;</code>:
                            <ul>
                                <li><code>col</code> – до стовпця.</li>
                                <li><code>row</code> – до рядка.</li>
                                <li>
                                    <code>colgroup</code> – до групи стовпців.
                                </li>
                                <li>
                                    <code>rowgroup</code> – до групи рядків.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>colspan</code></strong>
                    </p>
                    <ul>
                        <li>
                            Використовується в <code>&lt;td&gt;</code> або
                            <code>&lt;th&gt;</code> для об'єднання кількох
                            стовпців в одну клітинку.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>rowspan</code></strong>
                    </p>
                    <ul>
                        <li>
                            Використовується в <code>&lt;td&gt;</code> або
                            <code>&lt;th&gt;</code> для об'єднання кількох
                            рядків в одну клітинку.
                        </li>
                    </ul>
                </li>
                <li>
                    <p><strong>ARIA-атрибути</strong></p>
                    <ul>
                        <li>
                            <code>role="table"</code> – додає ролі таблиці, якщо
                            використовуються кастомні стилі.
                        </li>
                        <li>
                            <code>aria-describedby</code> – пояснює, що
                            представляє таблиця.
                        </li>
                        <li>
                            <code>aria-labelledby</code> – зв’язує таблицю із
                            заголовком або описом.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
