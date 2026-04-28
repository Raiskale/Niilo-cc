import { useEffect, useRef, useState } from 'react'
// Pallo cursori joka seuraa hiirtä
function Cursor() {
  const cursorRef = useRef(null)
  const hiiri = useRef({ x: 0, y: 0 })
  const paikka = useRef({ x: 0, y: 0 })
  const animaatio = useRef(null)
  const [hoverissa, setHoverissa] = useState(false)

  useEffect(() => {
    // seuraa hiiren liikettä
    const seuraaHiirta = (event) => {
      // tallentaa hiiren sijainnin
      hiiri.current.x = event.clientX
      hiiri.current.y = event.clientY
// katsoo onko hiiri alueen päällä jota voi clickata
      const klikattava = event.target.closest(
        'a, button, input, textarea, [data-cursor-big="true"]',
      )
      setHoverissa(Boolean(klikattava))
    }

    const liikuta = () => {
      // seuraa pienellä viiveellä
      paikka.current.x += (hiiri.current.x - paikka.current.x) * 0.14
      paikka.current.y += (hiiri.current.y - paikka.current.y) * 0.14
// päivittää pallon sijainnin
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${paikka.current.x}px, ${paikka.current.y}px, 0) translate(-50%, -50%)`
      }

      animaatio.current = requestAnimationFrame(liikuta)
    }
// event listeneri hiiren liikkeelle
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
    // tailwind tyyli pallohiirelle
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
