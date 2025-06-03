<template>
    <div class="grid gap-16 lab-5">
        <ul class="gallery" @click="onGalleryClick($event)">
            <li
                v-for="image in images"
                @mouseenter="onMouseenter($event)"
                @mouseleave="onMouseleave($event)"
            >
                <img
                    :src="image.preview"
                    :data-original="image.original"
                    :alt="image.description"
                />
            </li>
        </ul>

        <code class="code-block w-100p" :style="{ background: bgColor }">
            <h2>OnHover image:</h2>
            <pre
                >{{ activeImage }}
                </pre
            >
        </code>

        <div class="flex gap-16">
            <code class="code-block">
                <pre>
const images = [
    {
        preview: '/assets/images/slider/s1.jpg',
        original: '/assets/images/slider/original/s1-original.jpg',
        description: 'Description image 1',
    },
    {
        preview: '/assets/images/slider/s2.jpg',
        original: '/assets/images/slider/original/s2-original.jpg',
        description: 'Description image 2',
    },
    {
        preview: '/assets/images/slider/s3.jpg',
        original: '/assets/images/slider/original/s3-original.jpg',
        description: 'Description image 3',
    },
    {
        preview: '/assets/images/slider/s4.jpg',
        original: '/assets/images/slider/original/s4-original.jpg',
        description: 'Description image 4',
    },
    {
        preview: '/assets/images/slider/s5.jpg',
        original: '/assets/images/slider/original/s5-original.jpg',
        description: 'Description image 5',
    },
    {
        preview: '/assets/images/slider/s6.jpg',
        original: '/assets/images/slider/original/s6-original.jpg',
        description: 'Description image 6',
    },
]
                </pre>
            </code>
            <code class="code-block">
                <pre>

                    <h2 class="ta-center"><-------- HTML ---------></h2>
&lt;ul class="gallery" @click="onGalleryClick($event)"&gt;
    &lt;li
        v-for="image in images"
        @mouseenter="onMouseenter($event)"
        @mouseleave="onMouseleave($event)"
    &gt;
        &lt;img
            :src="image.preview"
            :data-original="image.original"
            :alt="image.description"
        /&gt;
    &lt;/li&gt;
&lt;/ul&gt;

                    <h2 class="ta-center"><-------- script ---------></h2>

const bgColor = ref('')

function onGalleryClick(evt: Event) {
    const img = getActiveImage(evt)
    if (!img) return

    window.basicLightbox.create(`&lt;img src="${img.src}"&gt;`).show()
}

function onMouseenter(evt: Event) {
    const img = getActiveImage(evt)
    if (!img) return

    bgColor.value = getRandomRgbColor(0.4)

    activeImage.value = {
        preview: img.src,
        original: img.dataset.original ?? '',
        description: img.alt,
    }
}

function onMouseleave(evt: Event) {
    activeImage.value = {
        preview: '',
        original: '',
        description: '',
    }
}

function getActiveImage(evt: Event): HTMLImageElement | null {
    const li = (evt.target as HTMLElement).closest('li')
    if (!li) return null

    return li.querySelector('img') as HTMLImageElement
}
            </pre>
            </code>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useScriptComposable } from '@/composables/scripts.composable.ts'
import { onMounted, ref } from 'vue'

const { loadStyle, loadScript, getRandomRgbColor } = useScriptComposable()

const activeImage = ref({
    preview: '',
    original: '',
    description: '',
})
const bgColor = ref('')

function onGalleryClick(evt: Event) {
    const img = getActiveImage(evt)
    if (!img) return

    window.basicLightbox.create(`<img src="${img.src}">`).show()
}

function onMouseenter(evt: Event) {
    const img = getActiveImage(evt)
    if (!img) return

    bgColor.value = getRandomRgbColor(0.4)

    activeImage.value = {
        preview: img.src,
        original: img.dataset.original ?? '',
        description: img.alt,
    }
}

function onMouseleave(evt: Event) {
    activeImage.value = {
        preview: '',
        original: '',
        description: '',
    }
}

function getActiveImage(evt: Event): HTMLImageElement | null {
    const li = (evt.target as HTMLElement).closest('li')
    if (!li) return null

    return li!.querySelector('img') as HTMLImageElement
}

const images = [
    {
        preview: '/assets/images/slider/s1.jpg',
        original: '/assets/images/slider/original/s1-original.jpg',
        description: 'Description image 1',
    },
    {
        preview: '/assets/images/slider/s2.jpg',
        original: '/assets/images/slider/original/s2-original.jpg',
        description: 'Description image 2',
    },
    {
        preview: '/assets/images/slider/s3.jpg',
        original: '/assets/images/slider/original/s3-original.jpg',
        description: 'Description image 3',
    },
    {
        preview: '/assets/images/slider/s4.jpg',
        original: '/assets/images/slider/original/s4-original.jpg',
        description: 'Description image 4',
    },
    {
        preview: '/assets/images/slider/s5.jpg',
        original: '/assets/images/slider/original/s5-original.jpg',
        description: 'Description image 5',
    },
    {
        preview: '/assets/images/slider/s6.jpg',
        original: '/assets/images/slider/original/s6-original.jpg',
        description: 'Description image 6',
    },
]

onMounted(async () => {
    loadStyle(
        'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css'
    )
    await loadScript(
        'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js'
    )
})
</script>
<style lang="scss">
.lab-5 {
    .gallery {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(0, 300px));

        li {
            cursor: pointer;
            box-shadow: 0 0 0px 0px rgba(0, 0, 0, 0);
            transition: all 0.2s linear;

            &:hover {
                box-shadow: 0 0 25px 3px rgba(0, 0, 0, 0.4);
            }
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
