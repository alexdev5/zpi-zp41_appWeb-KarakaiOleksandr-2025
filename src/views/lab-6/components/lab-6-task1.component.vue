<template>
    <div class="grid gap-16 lab-6 max-w-500">
        <input type="text" id="datetime-picker" />
        <AppBtn
            size="md"
            variant="primary"
            data-start
            :disabled="!canStart"
            @click="startTimer"
        >
            Start
        </AppBtn>
        <div class="timer">
            <div class="field">
                <span class="value" data-days>{{ time.days }}</span>
                <span class="label">Days</span>
            </div>
            <div class="field">
                <span class="value" data-hours>{{ time.hours }}</span>
                <span class="label">Hours</span>
            </div>
            <div class="field">
                <span class="value" data-minutes>{{ time.minutes }}</span>
                <span class="label">Minutes</span>
            </div>
            <div class="field">
                <span class="value" data-seconds>{{ time.seconds }}</span>
                <span class="label">Seconds</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/app-btn.component.vue'

import { onMounted, ref } from 'vue'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

const userSelectedDate = ref<Date | null>(null)
const canStart = ref(false)
const intervalId = ref<number | null>(null)

const time = ref({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
})

function addLeadingZero(value: number): string {
    return String(value).padStart(2, '0')
}

function convertMs(ms: number) {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const days = Math.floor(ms / day)
    const hours = Math.floor((ms % day) / hour)
    const minutes = Math.floor(((ms % day) % hour) / minute)
    const seconds = Math.floor((((ms % day) % hour) % minute) / second)

    return { days, hours, minutes, seconds }
}

function updateInterface(ms: number) {
    const { days, hours, minutes, seconds } = convertMs(ms)
    time.value = {
        days: String(days),
        hours: addLeadingZero(hours),
        minutes: addLeadingZero(minutes),
        seconds: addLeadingZero(seconds),
    }
}

function startTimer() {
    if (!userSelectedDate.value) return

    canStart.value = false
    const input = document.getElementById('datetime-picker') as HTMLInputElement
    input.disabled = true

    intervalId.value = window.setInterval(() => {
        const now = new Date().getTime()
        const delta = userSelectedDate.value!.getTime() - now

        if (delta <= 0) {
            clearInterval(intervalId.value!)
            updateInterface(0)
            input.disabled = false
            return
        }

        updateInterface(delta)
    }, 1000)
}

onMounted(() => {
    const picker = flatpickr('#datetime-picker', {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            const selected = selectedDates[0]
            const now = new Date()

            if (selected <= now) {
                iziToast.warning({
                    title: 'Warning',
                    message: 'Please choose a date in the future',
                })
                canStart.value = false
                return
            }

            userSelectedDate.value = selected
            canStart.value = true
        },
    })
})
</script>
<style>
.lab-6 {
    .field {
        display: flex;
        gap: 4px;
    }
}
</style>
