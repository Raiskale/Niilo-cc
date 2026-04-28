import FadeContent from './FadeContent'
import ShinyText from './ShinyText'
// aikajanalle tiedot
const aikalista = [
  {
    title: 'Ritaharjun koulu',
    label: 'Peruskoulu, Ritaharjun monitoimitalo',
    period: '12.8.2015 - 1.6.2024',
  },
  {
    title: 'Oulun yliopisto',
    label: 'TET-jakso',
    period: '1 viikko, yläasteen aikana',
  },
  {
    title: 'S-market',
    label: 'TET-jakso',
    period: '1 viikko, yläasteen aikana',
  },
  {
    title: 'OSAO',
    label: 'Tieto- ja viestintätekniikan perustutkinto',
    period: '7.8.2024 - 31.5.2027',
  },
  {
    title: 'Laitteistokone Oy',
    label: 'Työharjoittelu',
    period: '14.4.2025 - 13.6.2025',
  },
]

function Kolmas() {
  return (
    <section
      id="about"
      className="bg-black px-6 py-24 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          {/* otsikoita */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300/60">
              Tietoa minusta
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              {/* reactbitsistä otettu shinytext  */}
              <ShinyText
                text="Mun matka tähän asti"
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
            </h2>
            {/* lyhyt lisä */}
            <p className="mt-5 text-lg leading-8 text-white/70">
              Olen Oulusta ja opiskelen tieto- ja viestintätekniikkaa OSAO:ssa.
              Tykkään erityisesti frontendista, verkkosivujen tekemisestä ja
              siitä, että lopputulos näyttää hyvältä ja toimii kunnolla.
            </p>
          </div>
        </FadeContent>

        <div className="relative mt-18 md:mt-20">
          <div className="absolute bottom-0 left-4 top-0 w-[2px] bg-[linear-gradient(to_bottom,transparent,rgba(29,78,216,1)_10%,rgba(29,78,216,1)_90%,transparent)] md:left-1/2 md:-translate-x-1/2" />
        {/* mapataan taulukosta aikajanalle */}
          <div className="space-y-12 md:space-y-16">
            {aikalista.map((kohta, index) => {
              const vasemmalla = index % 2 === 0

              return (
                <FadeContent
                  key={`${kohta.title}-${kohta.period}`}
                  blur={true}
                  duration={900}
                  delay={index * 120}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <div className="relative grid items-center md:grid-cols-2">
                    <div
                      className={`${
                        vasemmalla ? 'md:pr-14' : 'md:col-start-2 md:pl-14'
                      }`}
                    >
                      {/* kortti */}
                      <article className="ml-10 rounded-lg border border-blue-700/35 bg-[#0b1220] px-5 py-5 md:ml-0 md:min-h-[9.5rem] md:max-w-[27rem]">
                        <h3 className="text-xl font-semibold text-white">
                          {kohta.title}
                        </h3>
                        <p className="mt-1 text-sm text-blue-300/85">
                          {kohta.label}
                        </p>
                        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-white/45">
                          {kohta.period}
                        </p>
                      </article>
                    </div>
                      
                    <div className="hidden md:block" />
                      {/* sininen piste */}
                    <div className="absolute left-4 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700 md:left-1/2" />
                  </div>
                </FadeContent>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kolmas
