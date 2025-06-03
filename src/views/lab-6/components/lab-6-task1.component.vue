<template>
    <div class="grid gap-16">
        <ul class="gallery" @click="onGalleryClick($event)">
            <li v-for="image in images">
                <img :src="image.preview" alt="" />
            </li>
        </ul>

        <div class="flex gap-16"></div>
    </div>
</template>

<script lang="ts" setup>
import { useScriptComposable } from '@/composables/scripts.composable.ts'
import { onMounted } from 'vue'

const { loadStyle, loadScript } = useScriptComposable()

function onGalleryClick(evt: Event) {
    console.log(evt)
    console.log(basicLightbox)
    basicLightbox.create(`<img src="https://placehold.it/1400x900">`).show()
}

const images = [
    {
        preview: '/assets/images/slider/s1-original.jpg',
        original: '/assets/images/slider/original/s1-original.jpg',
        description: 'Description image 1',
    },
    {
        preview: '/assets/images/slider/s2-original.jpg',
        original: '/assets/images/slider/original/s2-original.jpg',
        description: 'Description image 2',
    },
    {
        preview: '/assets/images/slider/s3-original.jpg',
        original: '/assets/images/slider/original/s3-original.jpg',
        description: 'Description image 3',
    },
    {
        preview: '/assets/images/slider/s4-original.jpg',
        original: '/assets/images/slider/original/s4-original.jpg',
        description: 'Description image 4',
    },
    {
        preview: '/assets/images/slider/s5-original.jpg',
        original: '/assets/images/slider/original/s5-original.jpg',
        description: 'Description image 5',
    },
    {
        preview: '/assets/images/slider/s6-original.jpg',
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
