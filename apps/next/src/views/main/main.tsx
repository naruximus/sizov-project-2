import { HeroSection } from './ui/hero-section';

export function Main() {
  return (
    <>
      <HeroSection />
      <main className="pt-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Hero Section */}

          {/* Journey Section */}
          <section className="max-w-2xl space-y-8">
            <p className="text-lg">
              10 years ago I quit my job and started exploring the world with:
            </p>

            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-center">
                <span className="mr-2">-</span>
                <span>$100</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">-</span>
                <span>the cheapest camera</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">-</span>
                <span>a tripod</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">-</span>
                <span>and curiosity</span>
              </li>
            </ul>
          </section>

          {/* Timeline Section */}
          <section className="max-w-4xl space-y-16">
            <h2 className="text-lg">filming for:</h2>

            <div className="space-y-16">
              <div className="group">
                <div className="text-neutral-500 mb-4">2023</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-neutral-500">-</span>
                    <a
                      href="#"
                      className="hover:text-neutral-400 transition-colors"
                    >
                      Project Name One
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-neutral-500">-</span>
                    <a
                      href="#"
                      className="hover:text-neutral-400 transition-colors"
                    >
                      Project Name Two
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="text-neutral-500 mb-4">2022</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-neutral-500">-</span>
                    <a
                      href="#"
                      className="hover:text-neutral-400 transition-colors"
                    >
                      Another Project
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-neutral-500">-</span>
                    <a
                      href="#"
                      className="hover:text-neutral-400 transition-colors"
                    >
                      Cool Video Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
