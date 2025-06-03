export function useScriptComposable() {
    function loadStyle(href: string): void {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
    }

    function loadScript(src: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = src
            script.async = true
            script.onload = () => resolve()
            script.onerror = () => reject()
            document.body.appendChild(script)
        })
    }

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0')}`
    }

    function getRandomRgbColor(opacity?: number): string {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const a = opacity ? opacity : 1
        return `rgb(${r}, ${g}, ${b}, ${a})`
    }

    return {
        loadStyle,
        loadScript,
        getRandomHexColor,
        getRandomRgbColor,
    }
}
