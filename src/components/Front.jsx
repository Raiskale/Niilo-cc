import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import Beams from './Beams'
import FadeContent from './FadeContent'
import LogoLoop from './LogoLoop'
import memojiThumb from '../assets/image0.png'
import pdfLinkki from '../assets/Lisää tietoa Niilo Räisänen.pdf'

function Front() {
  const teknologiat = [
    {
      node: <SiHtml5 />,
      title: 'HTML',
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      node: <SiCss />,
      title: 'CSS',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      node: <SiJavascript />,
      title: 'JavaScript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    {
      node: <SiTailwindcss />,
      title: 'Tailwind',
      href: 'https://tailwindcss.com',
    },
    { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org' },
  ]

  return (
    <section className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 bg-[#05070b]" />
      <div className="absolute inset-0">
        <Beams
          beamWidth={2}
          beamHeight={20}
          beamNumber={20}
          lightColor="#0073ff"
          speed={2}
          noiseIntensity={5}
          scale={0.2}
          rotation={40}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.34),rgba(2,6,23,0.52),rgba(2,6,23,0.86))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-[linear-gradient(180deg,rgba(5,7,11,0),#050505)] md:h-56" />

      <div className="relative z-20 mx-auto max-w-6xl px-6 pt-32 pb-28 md:px-8 md:pt-40 md:pb-36">
        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.95fr] lg:items-center">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-sm">
                <p className="text-lg text-white/70">Tuleva ohjelmistokehittäjä</p>
                <img
                  src={memojiThumb}
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h1 className="mt-5 text-5xl font-semibold leading-none tracking-tight text-white md:text-7xl lg:text-[5.5rem] lg:whitespace-nowrap">
                Niilo Räisänen
              </h1>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://github.com/Raiskale"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                >
                  <FaGithub className="h-6 w-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/niilo-r%C3%A4is%C3%A4nen-4325702b5/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>

                <a
                  href="mailto:niilo.raisanen@gmail.com"
                  aria-label="Sähköposti"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                >
                  <MdEmail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </FadeContent>

          <div className="hidden lg:block" />
        </section>

        <FadeContent
          blur={true}
          duration={1000}
          delay={250}
          easing="ease-out"
          initialOpacity={0}
        >
          <section className="mt-10 border-y border-white/8 py-6">
            <LogoLoop
              logos={teknologiat}
              speed={40}
              direction="left"
              logoHeight={22}
              gap={50}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Käyttämäni teknologiat"
              renderItem={(teknologia) => (
                <a
                  href={teknologia.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-white/55 transition hover:text-white"
                >
                  <span className="text-[24px]">{teknologia.node}</span>
                  <span className="text-xl">{teknologia.title}</span>
                </a>
              )}
            />
          </section>
        </FadeContent>

        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          <FadeContent
            blur={true}
            duration={1000}
            delay={350}
            easing="ease-out"
            initialOpacity={0}
          >
            <div>
              <p className="text-xl text-blue-100/70">Hei, olen Niilo</p>
              <p className="mt-4 max-w-lg text-xl leading-9 text-white/78 md:text-2xl md:leading-[1.3]">
                Tuleva web-kehittäjä kotoisin Oulusta. Olen 2008 syntynyt poika ja käyn vapaa-ajallani kuntosalilla ja teen omia projekteja. Tykkään tehdä hyvännäköisiä verkkosivuja, jotka ovat käyttäjäystävällisiä ja moderneja.
              </p>

              <a
                href={pdfLinkki}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center gap-2 text-xs  underline  text-white transition hover:text-blue-400"
              >
                <FiFileText className="h-6 w-6" />
                <span className="text-base font-medium">Lue lisää minusta</span>
              </a>
            </div>
          </FadeContent>

          <FadeContent
            blur={true}
            duration={1000}
            delay={450}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex items-end">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-blue-100/70">
                  Tällä hetkellä
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm text-white/45">Valmistun</p>
                    <p className="mt-1 text-lg text-white">
                      Ohjelmistokehittäjäksi
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-white/45">Opiskelen</p>
                    <p className="mt-1 text-lg text-white">
                      Tieto- ja viestintätekniikkaa OSAO:lla
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-white/45">Kiinnostuksen kohteet</p>
                    <p className="mt-1 text-lg text-white">
                      Web-kehitys, frontend ja käyttöliittymäsuunnittelu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeContent>
        </section>
      </div>
    </section>
  )
}

export default Front
