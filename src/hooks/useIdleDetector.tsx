import { useEffect, useState } from "react"

export function useIdleDetector(timeout = 5000) {
    const [idle, setIdle] = useState(false)

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>

        const reset = () => {
            setIdle(false)
            clearTimeout(timer)
            timer = setTimeout(() => setIdle(true), timeout)
        }

        reset()
        window.addEventListener("mousemove", reset)
        window.addEventListener("keydown", reset)
        return () => {
            clearTimeout(timer)
            window.removeEventListener("mousemove", reset)
            window.removeEventListener("keydown", reset)
        }
    }, [timeout])

    return idle
}