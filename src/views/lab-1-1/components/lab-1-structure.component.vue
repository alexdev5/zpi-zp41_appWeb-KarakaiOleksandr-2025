<template>
    <div class="grid gap-16">
        <code class="code-block">
            &lt;!DOCTYPE html&gt;<br />
            &lt;html lang=&quot;uk&quot;&gt;<br />
            &nbsp;&nbsp;&lt;head&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name=&quot;viewport&quot;
            content=&quot;width=device-width, initial-scale=1.0&quot;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Назва сторінки&lt;/title&gt;<br />
            &nbsp;&nbsp;&lt;/head&gt;<br />
            &nbsp;&nbsp;&lt;body&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;header&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Заголовок сайту
            --&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/header&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;main&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Основний вміст --&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/main&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;footer&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Футер сайту --&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/footer&gt;<br />
            &nbsp;&nbsp;&lt;/body&gt;<br />
            &lt;/html&gt;
        </code>
        <div>
            <h3>Основні елементи:</h3>
            <hr />
            <ol>
                <li>
                    <p>
                        <strong><code>&lt;!DOCTYPE html&gt;</code></strong
                        >:
                    </p>
                    <ul>
                        <li>Визначає тип документа (HTML5).</li>
                        <li>
                            Інформує браузер про використання сучасної версії
                            HTML.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>&lt;html&gt;</code></strong
                        >:
                    </p>
                    <ul>
                        <li>Кореневий елемент документа.</li>
                        <li>Вміщує всі інші елементи HTML.</li>
                        <li>
                            Атрибут <code>lang</code> задає мову сторінки
                            (наприклад, <code>lang="en"</code> для англійської,
                            <code>lang="uk"</code> для української).
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>&lt;head&gt;</code></strong
                        >:
                    </p>
                    <ul>
                        <li>
                            Містить метаінформацію про документ (не
                            відображається на сторінці).
                        </li>
                        <li>
                            Основні елементи:
                            <ul>
                                <li>
                                    <code>&lt;meta charset="UTF-8"&gt;</code>:
                                    Вказує на використання кодування UTF-8.
                                </li>
                                <li>
                                    <code
                                        >&lt;meta name="viewport"
                                        content="width=device-width,
                                        initial-scale=1.0"&gt;</code
                                    >: Забезпечує адаптивність для мобільних
                                    пристроїв.
                                </li>
                                <li>
                                    <code>&lt;title&gt;</code>: Визначає назву
                                    сторінки, що відображається у вкладці
                                    браузера.
                                </li>
                                <li>
                                    Інші можливі елементи: стилі CSS (<code
                                        >&lt;style&gt;</code
                                    >
                                    або <code>&lt;link&gt;</code>), скрипти
                                    JavaScript (<code>&lt;script&gt;</code>),
                                    фавікони (<code
                                        >&lt;link rel="icon"&gt;</code
                                    >).
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <strong><code>&lt;body&gt;</code></strong
                        >:
                    </p>
                    <ul>
                        <li>
                            Містить основний вміст сторінки, який відображається
                            користувачам.
                        </li>
                        <li>
                            Основні розділи:
                            <ul>
                                <li>
                                    <strong><code>&lt;header&gt;</code></strong
                                    >: Заголовок сторінки або сайту (логотип,
                                    навігація).
                                </li>
                                <li>
                                    <strong><code>&lt;main&gt;</code></strong
                                    >: Основний вміст (текст, зображення,
                                    таблиці, відео).
                                </li>
                                <li>
                                    <strong><code>&lt;footer&gt;</code></strong
                                    >: Нижній колонтитул (контактна інформація,
                                    авторські права).
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
