<template>
    <div class="grid gap-16">
        <div class="images-wrapper">
            <div class="image-block">
                <img
                    src="/assets/images/form-html.png"
                    alt="Скрін форми"
                    width="600"
                    height="400"
                    loading="lazy"
                    title="Скрін форми"
                />
            </div>
            <div class="image-block">
                <img
                    src="/assets/images/list-html.png"
                    alt="Скрін списку"
                    width="600"
                    height="400"
                    loading="lazy"
                    title="Скрін списку"
                />
            </div>
            <div class="image-block">
                <img
                    src="/assets/images/table-html.png"
                    alt="Скрін таблиці"
                    width="600"
                    height="400"
                    loading="lazy"
                    title="Скрін таблиці"
                />
            </div>
        </div>
        <div>
            <h3>Атрибути зображення <code>&lt;img&gt;</code></h3>
            <hr />
            <ol>
                <li>
                    <p><code>src</code>:</p>
                    <ul>
                        <li>Основна URL-адреса зображення.</li>
                    </ul>
                </li>
                <li>
                    <p><code>alt</code>:</p>
                    <ul>
                        <li>
                            Альтернативний текст, який описує зміст зображення.
                        </li>
                        <li>Важливий для доступності та SEO.</li>
                    </ul>
                </li>
                <li>
                    <p><code>width</code> і <code>height</code>:</p>
                    <ul>
                        <li>Фізичні розміри зображення у пікселях.</li>
                        <li>
                            Покращують продуктивність завдяки резервуванню місця
                            до завантаження.
                        </li>
                    </ul>
                </li>
                <li>
                    <p><code>loading="lazy"</code>:</p>
                    <ul>
                        <li>
                            Ліниве завантаження: зображення завантажується лише
                            тоді, коли потрапляє у вікно перегляду.
                        </li>
                    </ul>
                </li>
                <li>
                    <p><code>decoding="async"</code>:</p>
                    <ul>
                        <li>
                            Асинхронна декодування зображення, що прискорює
                            рендеринг сторінки.
                        </li>
                    </ul>
                </li>
                <li>
                    <p><code>title</code>:</p>
                    <ul>
                        <li>Підказка, що з’являється при наведенні курсора.</li>
                    </ul>
                </li>
                <li>
                    <p><code>srcset</code>:</p>
                    <ul>
                        <li>
                            Вказує кілька версій зображення для різних розмірів
                            екрана.
                        </li>
                        <li>Формат: <code>URL розмір</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><code>sizes</code>:</p>
                    <ul>
                        <li>
                            Підказує браузеру, який розмір зображення
                            завантажити в залежності від ширини вікна перегляду.
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.images-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 8px;

    img {
        border: 2px solid var(--app-color-p-40);
        border-radius: 5px;
    }
}
</style>
