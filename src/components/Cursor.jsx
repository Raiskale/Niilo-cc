import { useEffect, useRef, useState } from 'react'

function Cursor() {
  const cursorRef = useRef(null)
  const hiiri = useRef({ x: 0, y: 0 })
  const paikka = useRef({ x: 0, y: 0 })
  const animaatio = useRef(null)
  const [hoverissa, setHoverissa] = useState(false)

  useEffect(() => {
    const seuraaHiirta = (event) => {
      hiiri.current.x = event.clientX
      hiiri.current.y = event.clientY

      const klikattava = event.target.closest(
        'a, button, input, textarea, [data-cursor-big="true"]',
      )
      setHoverissa(Boolean(klikattava))
    }

    const liikuta = () => {
      paikka.current.x += (hiiri.current.x - paikka.current.x) * 0.14
      paikka.current.y += (hiiri.current.y - paikka.current.y) * 0.14

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${paikka.current.x}px, ${paikka.current.y}px, 0) translate(-50%, -50%)`
      }

      animaatio.current = requestAnimationFrame(liikuta)
    }

    window.addEventListener('mousemove', seuraaHiirta)
    animaatio.current = requestAnimationFrame(liikuta)

    return () => {
      window.removeEventListener('mousemove', seuraaHiirta)

      if (animaatio.current) {
        cancelAnimationFrame(animaatio.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 rounded-full border border-white/55 mix-blend-difference transition-[height,width,border-color,background-color] duration-200 md:block ${
        hoverissa
          ? 'h-12 w-12 border-white/80 bg-white/10'
          : 'bg-transparent'
      }`}
    />
  )
}

export default Cursor
