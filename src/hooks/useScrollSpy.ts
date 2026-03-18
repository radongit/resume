import { useEffect, useState } from 'react'

export default function useScrollSpy(ids: string[], offset = 100) {
    const [activeId, setActiveId] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            for (let i = ids.length - 1; i >= 0; i--) {
                const el = document.getElementById(ids[i])
                if (el) {
                    const top = el.getBoundingClientRect().top
                    if (top <= offset) {
                        setActiveId(ids[i])
                        return
                    }
                }
            }
            setActiveId('')
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [ids, offset])

    return activeId
}
