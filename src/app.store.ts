import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Semester } from '@/app.types.ts'

export const useAppStore = defineStore('app', () => {
    const router = useRouter()

    const state = reactive({
        semester: Semester.Two,
    })

    function handlePageEvent() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.body.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const isOneSemester = computed(() => state.semester === Semester.One)
    const isTwoSemester = computed(() => state.semester === Semester.Two)

    return {
        state,
        isOneSemester,
        isTwoSemester,
        handlePageEvent,
    }
})
