import { useEffect, useState } from 'react'

export default function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev)
    }

    useEffect(() => {
        const root = document.documentElement
        if (isDarkMode) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [isDarkMode])

    return { isDarkMode, toggleDarkMode }
}
