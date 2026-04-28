import { useState } from 'react'
import FadeContent from './FadeContent'
// lähetetään tänne lomakkeentiedot
const formspreeLinkki = 'https://formspree.io/f/xwvaoeoe'

function Contact() {
  // tallentaa kenttien arvot
  const [lomakeTiedot, setLomakeTiedot] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [lomakkeenTila, setLomakkeenTila] = useState('idle')
  // teksti käyttäjälle lähetyksen jälkeen
  const [palaute, setPalaute] = useState('')

  const vaihdaKentta = (event) => {
    const { name, value } = event.target
    setLomakeTiedot((nykyisetTiedot) => ({
      ...nykyisetTiedot,
      [name]: value,
    }))
  }
// lähettää tiedot formspreehen
  const lahetaLomake = async (event) => {
    event.preventDefault()
    setLomakkeenTila('loading')
    setPalaute('')

    try {
      // lähettää tiedot json muodossa
      const vastaus = await fetch(formspreeLinkki, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: lomakeTiedot.name,
          email: lomakeTiedot.email,
          subject: lomakeTiedot.subject,
          message: lomakeTiedot.message,
        }),
      })

      if (!vastaus.ok) {
        throw new Error('Lähetys epäonnistui.')
      }
// jos onnistuu nii näyttää palautteen
      setLomakkeenTila('success')
      setPalaute('Viesti lähetettiin onnistuneesti.')
      setLomakeTiedot({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch {
      // errorviesti jos tulee virhe
      setLomakkeenTila('error')
      setPalaute('Viestin lähetys ei onnistunut. Kokeile uudelleen.')
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-8 md:py-28"
    >
      
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#000000_48%,#020611_68%,#071327_84%,#0d2145_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[22rem] bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.22),rgba(59,130,246,0.12)_32%,rgba(59,130,246,0.04)_48%,transparent_74%)]" />
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(rgba(255,255,255,0.9)_0.6px,transparent_0.8px)] [background-size:10px_10px]" />

      <div className="relative mx-auto max-w-4xl">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Ota yhteyttä
            </h2>
          </div>
        </FadeContent>

        <FadeContent
          blur={true}
          duration={1000}
          delay={150}
          easing="ease-out"
          initialOpacity={0}
        >
          <form
            onSubmit={lahetaLomake}
            className="relative mx-auto mt-14 w-full max-w-2xl overflow-hidden rounded-[1rem] border border-blue-500/55 bg-[#101827] p-7 md:min-h-[48rem] md:p-9"
          >
            <div className="relative grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                value={lomakeTiedot.name}
                onChange={vaihdaKentta}
                placeholder="Nimi"
                className="rounded-xl border border-blue-500/40 bg-[#0b1220] px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                value={lomakeTiedot.email}
                onChange={vaihdaKentta}
                placeholder="Sähköposti"
                className="rounded-xl border border-blue-500/40 bg-[#0b1220] px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-blue-400"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              value={lomakeTiedot.subject}
              onChange={vaihdaKentta}
              placeholder="Aihe"
              className="relative mt-4 w-full rounded-xl border border-blue-500/40 bg-[#0b1220] px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-blue-400"
              required
            />

            <textarea
              name="message"
              value={lomakeTiedot.message}
              onChange={vaihdaKentta}
              rows="13"
              placeholder="Kirjoita viestisi tähän..."
              className="mt-4 w-full resize-none rounded-xl border border-blue-500/40 bg-[#0b1220] px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-blue-400 md:min-h-[24rem]"
              required
            />

            <div className="mt-6">
              <p
                className={`text-sm ${
                  lomakkeenTila === 'success'
                    ? 'text-blue-200/90'
                    : lomakkeenTila === 'error'
                      ? 'text-red-200/90'
                      : 'text-white/55'
                }`}
              >
                {palaute ||
                  'Lomakkeen lähetys toimii Formspree-palvelun kautta.'}
              </p>

              <button
                type="submit"
                disabled={lomakkeenTila === 'loading'}
                className="mt-4 w-full cursor-pointer rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {lomakkeenTila === 'loading' ? 'Lähetetään...' : 'Lähetä viesti'}
              </button>
            </div>
          </form>
        </FadeContent>
      </div>
    </section>
  )
}

export default Contact
