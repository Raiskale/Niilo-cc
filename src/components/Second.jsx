import sivupalvelutKuva from '../assets/Sivupalvelut.png'
import toripaivaKuva from '../assets/Toripäivä.png'
import oupKuva from '../assets/Oup.png'
import otsikkoKuva from '../assets/image.png'
import { AiOutlineGithub } from 'react-icons/ai'
import FadeContent from './FadeContent'
import GlareHover from './GlareHover'
import ShinyText from './ShinyText'

function Second() {
  // lista projekteista jotka sit mapataan sivulle kun niitä lisätään
  const projektit = [
    {
      name: 'Sivupalvelut.fi',
      type: 'Oma projekti',
      text: 'Oma projekti, jossa mahdollisesti koitan myydä nettisivupalvelua myöhemmin.',
      url: 'https://sivupalvelut.fi/',
      image: sivupalvelutKuva,
      alt: 'Sivupalvelut-projektin etusivu',
    },
    {
      name: 'OP-Pankki lomake',
      type: 'HTML / CSS / JS',
      text: 'Koulussa tehty projekti, jossa tein lomakkeen oikean lomakkeen kuvan perusteella. (Tiedot eivät ole aitoja sivulla)',
      url: 'https://oup-theta.vercel.app/',
      image: oupKuva,
      alt: 'OUP-projektin etusivu',
      github: 'https://github.com/Raiskale/oup',
    },
    {
      name: 'Tapahtumasivusto',
      type: 'PHP / HTML / CSS',
      text: 'Koulussa tehty PHP-projekti johon voi rekisteröityä ja muokata omaa profiilia, sekä admin roolin omaavalle admin paneeli.',
      url: 'https://geronimo.okol.org/~rainii/tapahtuma-master/index.php',
      image: toripaivaKuva,
      alt: 'Toripäivä-projektin etusivu',
      github: 'https://github.com/Raiskale/Toripaiva/tree/master',
    },
  ]

  return (
    
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 pb-36 pt-24 text-white md:px-8 md:pb-44 md:pt-28 xl:pt-44"
    >
      
      <div className="relative z-20 mx-auto max-w-6xl">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.22em] text-blue-100/65">
              Projektit
            </p>
            <h2 className="mt-4 inline-flex items-center justify-center  text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {/* shinytext animaatio reactbits.dev sivulta ladattu projektiin  */}
              <ShinyText
                text="Mun projektit"
                speed={2}
                delay={0}
                color="#8f96a3"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
              <img
              // tietokone memoji
                src={otsikkoKuva}
                alt=""
                aria-hidden="true"
                className="h-14 w-14 object-contain md:h-18 md:w-18"
              />
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/62">
              Tässä muutama projekti, joita olen tehnyt.
            </p>
          </div>
        </FadeContent>

        <FadeContent
          blur={true}
          duration={1000}
          delay={150}
          easing="ease-out"
          initialOpacity={0}
        >
          {/* mapataan projekti listasta projekteja */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projektit.map((projekti, index) => (
              <GlareHover
                key={projekti.name}
                width="100%"
                height="100%"
                background="#0b0f17"
                borderRadius="1rem"
                borderColor="rgba(255,255,255,0.1)"
                glareColor="#ffffff"
                glareOpacity={0.2}
                glareAngle={-30}
                glareSize={240}
                transitionDuration={800}
                playOnce={false}
                className="block"
              >
                {/* projektikortti */}
                <article
                  data-cursor-big="true"
                  className="relative z-0 h-full w-full rounded-2xl bg-[#0b0f17] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/55">{projekti.type}</span>
                    <span className="text-sm text-white/35">0{index + 1}</span>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-xl border border-white/8 bg-[#111827]">
                    <img
                      src={projekti.image}
                      alt={projekti.alt}
                      className="h-52 w-full object-cover object-top"
                    />
                  </div>

                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                      Projekti {index + 1}
                    </p>
                  </div>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {projekti.name}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/58">
                    {projekti.text}
                  </p>

                  <div className="mt-5 flex gap-4">
                    <a
                      href={projekti.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-sm text-blue-300 transition hover:text-blue-200"
                    >
                      Avaa projekti
                    </a>
                    {/* githubbi linkki näkyy vaa jos sille projektille on laitettu github arvo tauluun */}
                    {projekti.github && (
                      <a
                        href={projekti.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-300 transition hover:text-gray-200"
                      >
                        <AiOutlineGithub size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </article>
              </GlareHover>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  )
}

export default Second
